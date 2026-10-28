const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const initAutoUpdater = () => {
  if (!app.isPackaged) return;
  try {
    const { autoUpdater } = require('electron-updater');
    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;
    autoUpdater.checkForUpdatesAndNotify().catch((err) => {
      console.log('Auto-update check:', err && err.message);
    });
  } catch (e) {
    console.log('Failed to initialize auto-updater:', e && e.message);
  }
};


// Disable background throttling for instant response
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-renderer-backgrounding');

const getStateFilePath = () => path.join(app.getPath('userData'), 'flowplan-desktop-data.json');

const loadStateSync = () => {
  try {
    const filePath = getStateFilePath();
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  } catch (err) {
    console.error('Failed to read desktop state file:', err);
  }
  return null;
};

const saveStateSync = (serializedJson) => {
  if (typeof serializedJson !== 'string' || !serializedJson.trim()) return;
  try {
    const filePath = getStateFilePath();
    fs.writeFileSync(filePath, serializedJson, 'utf-8');
  } catch (err) {
    console.error('Failed to write desktop state file:', err);
  }
};

ipcMain.on('flowplan:load-state-sync', (event) => {
  event.returnValue = loadStateSync();
});

ipcMain.on('flowplan:save-state', (_event, serializedJson) => {
  saveStateSync(serializedJson);
});

const ensurePreloadFile = (initialStateJson) => {
  const preloadPath = path.join(app.getPath('userData'), 'flowplan-preload.js');
  const preloadCode = `
    const { contextBridge, ipcRenderer } = require('electron');
    const cachedInitialState = ${JSON.stringify(initialStateJson)};
    contextBridge.exposeInMainWorld('electronDesktopAPI', {
      loadStateSync: () => {
        try {
          const latest = ipcRenderer.sendSync('flowplan:load-state-sync');
          if (latest) return latest;
        } catch (e) {}
        return cachedInitialState;
      },
      saveState: (serializedJson) => ipcRenderer.send('flowplan:save-state', serializedJson)
    });
  `;
  fs.writeFileSync(preloadPath, preloadCode, 'utf-8');
  return preloadPath;
};

function createMainWindow() {
  const initialState = loadStateSync();
  const preloadPath = ensurePreloadFile(initialState);

  const mainWindow = new BrowserWindow({
    width: 1380,
    height: 880,
    minWidth: 940,
    minHeight: 640,
    title: 'FlowPlan — Daily, Weekly & Monthly Focus Planner',
    backgroundColor: '#090d16',
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      backgroundThrottling: false
    }
  });

  if (app.isPackaged) {
    app.setLoginItemSettings({
      openAtLogin: true,
      path: app.getPath('exe')
    });
  } else {
    app.setLoginItemSettings({
      openAtLogin: true
    });
  }

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.show();
  });

  mainWindow.loadFile(path.join(__dirname, 'daily_weekly_planner.html'));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createMainWindow();
  initAutoUpdater();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});