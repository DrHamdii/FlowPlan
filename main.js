const { app, BrowserWindow, shell, ipcMain, Menu, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindowRef = null;
let savedWindowBoundsBeforeMini = null;
let isMiniClockActive = false;
let isAlwaysOnTopActive = false;
let explicitUserMinimizePending = false;
let alwaysOnTopKeepAliveTimer = null;

function stopAlwaysOnTopKeepAlive() {
  if (alwaysOnTopKeepAliveTimer) {
    clearInterval(alwaysOnTopKeepAliveTimer);
    alwaysOnTopKeepAliveTimer = null;
  }
}

function elevateWindowTopMost(win) {
  if (!win || win.isDestroyed()) return;
  try {
    win.setAlwaysOnTop(true, 'screen-saver', 1);
  } catch (e1) {
    try {
      win.setAlwaysOnTop(true, 'pop-up-menu');
    } catch (e2) {
      win.setAlwaysOnTop(true);
    }
  }
  try {
    win.moveTop();
  } catch (e3) {}
}

function applyAlwaysOnTopState(win, enable, notifyRenderer = true) {
  if (!win || win.isDestroyed()) return false;
  // Always on top is exclusively for the Mini Clock
  const nextFlag = Boolean(enable && isMiniClockActive);
  isAlwaysOnTopActive = nextFlag;

  if (nextFlag) {
    elevateWindowTopMost(win);
    stopAlwaysOnTopKeepAlive();
    // Keep Mini Clock visible even when Windows "Show Desktop" (Win+D) raises WorkerW or minimizes windows
    alwaysOnTopKeepAliveTimer = setInterval(() => {
      if (!win || win.isDestroyed() || !isMiniClockActive || !isAlwaysOnTopActive) {
        stopAlwaysOnTopKeepAlive();
        return;
      }
      if (explicitUserMinimizePending) return;
      try {
        if (win.isMinimized()) {
          win.restore();
          win.showInactive();
        } else if (!win.isVisible()) {
          win.showInactive();
        }
        elevateWindowTopMost(win);
      } catch (e) {}
    }, 250);
  } else {
    stopAlwaysOnTopKeepAlive();
    try {
      win.setAlwaysOnTop(false);
    } catch (e) {}
  }

  if (notifyRenderer && win.webContents && !win.webContents.isDestroyed()) {
    try {
      win.webContents.send('flowplan:always-on-top-changed', isAlwaysOnTopActive);
    } catch (e) {}
  }

  return isAlwaysOnTopActive;
}

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

ipcMain.handle('flowplan:export-data-dialog', async (event, serializedJson, suggestedFileName) => {
  try {
    const win = BrowserWindow.fromWebContents(event.sender) || mainWindowRef;
    const defaultName = suggestedFileName || `FlowPlan_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    const result = await dialog.showSaveDialog(win, {
      title: 'Export FlowPlan Data',
      defaultPath: path.join(app.getPath('documents'), defaultName),
      filters: [
        { name: 'FlowPlan Data (.json)', extensions: ['json'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });
    if (result.canceled || !result.filePath) {
      return { ok: false, canceled: true };
    }
    fs.writeFileSync(result.filePath, serializedJson, 'utf-8');
    return { ok: true, filePath: result.filePath };
  } catch (err) {
    console.error('Export data dialog error:', err);
    return { ok: false, error: err && err.message };
  }
});

ipcMain.handle('flowplan:import-data-dialog', async (event) => {
  try {
    const win = BrowserWindow.fromWebContents(event.sender) || mainWindowRef;
    const result = await dialog.showOpenDialog(win, {
      title: 'Import FlowPlan Data',
      defaultPath: app.getPath('documents'),
      properties: ['openFile'],
      filters: [
        { name: 'FlowPlan Data (.json)', extensions: ['json'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });
    if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
      return { ok: false, canceled: true };
    }
    const targetPath = result.filePaths[0];
    const content = fs.readFileSync(targetPath, 'utf-8');
    const parsed = JSON.parse(content);
    if (!parsed || typeof parsed !== 'object') {
      return { ok: false, error: 'Invalid FlowPlan JSON file' };
    }
    saveStateSync(content);
    return { ok: true, data: content, filePath: targetPath };
  } catch (err) {
    console.error('Import data dialog error:', err);
    return { ok: false, error: err && err.message };
  }
});

ipcMain.handle('flowplan:set-always-on-top', (event, enable) => {
  try {
    const win = BrowserWindow.fromWebContents(event.sender) || mainWindowRef;
    if (!win || win.isDestroyed()) return { ok: false, alwaysOnTop: false };
    // Always on top is only active when in Mini Clock mode
    const activeFlag = applyAlwaysOnTopState(win, Boolean(enable), false);
    return { ok: true, alwaysOnTop: activeFlag };
  } catch (err) {
    console.error('Set always on top error:', err);
    return { ok: false, alwaysOnTop: false };
  }
});

ipcMain.handle('flowplan:set-mini-clock-mode', (event, enable) => {
  try {
    const win = BrowserWindow.fromWebContents(event.sender) || mainWindowRef;
    if (!win || win.isDestroyed()) return { ok: false, miniMode: false };
    const wantMini = Boolean(enable);

    if (wantMini && !isMiniClockActive) {
      savedWindowBoundsBeforeMini = {
        bounds: win.getBounds(),
        wasMaximized: win.isMaximized(),
        wasFullScreen: win.isFullScreen()
      };
      if (win.isFullScreen()) win.setFullScreen(false);
      if (win.isMaximized()) win.unmaximize();
      win.setMenuBarVisibility(false);
      win.setMinimumSize(250, 270);
      win.setSize(310, 345, true);
      isMiniClockActive = true;
    } else if (!wantMini && isMiniClockActive) {
      // Automatically turn off Always on Top when exiting Mini Clock mode
      applyAlwaysOnTopState(win, false, true);
      win.setMinimumSize(940, 640);
      win.setMenuBarVisibility(true);
      if (savedWindowBoundsBeforeMini) {
        if (savedWindowBoundsBeforeMini.bounds) {
          win.setBounds(savedWindowBoundsBeforeMini.bounds, true);
        }
        if (savedWindowBoundsBeforeMini.wasMaximized) {
          win.maximize();
        }
        if (savedWindowBoundsBeforeMini.wasFullScreen) {
          win.setFullScreen(true);
        }
      } else {
        win.setSize(1380, 880, true);
      }
      isMiniClockActive = false;
    } else if (!wantMini && !isMiniClockActive && isAlwaysOnTopActive) {
      applyAlwaysOnTopState(win, false, true);
    }

    return {
      ok: true,
      miniMode: isMiniClockActive,
      alwaysOnTop: isAlwaysOnTopActive
    };
  } catch (err) {
    console.error('Set mini clock mode error:', err);
    return { ok: false, miniMode: isMiniClockActive, alwaysOnTop: isAlwaysOnTopActive };
  }
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
      saveState: (serializedJson) => ipcRenderer.send('flowplan:save-state', serializedJson),
      exportDataDialog: (serializedJson, suggestedFileName) =>
        ipcRenderer.invoke('flowplan:export-data-dialog', serializedJson, suggestedFileName),
      importDataDialog: () => ipcRenderer.invoke('flowplan:import-data-dialog'),
      setAlwaysOnTop: (enable) => ipcRenderer.invoke('flowplan:set-always-on-top', enable),
      setMiniClockMode: (enable) => ipcRenderer.invoke('flowplan:set-mini-clock-mode', enable),
      onAlwaysOnTopChanged: (callback) => {
        ipcRenderer.removeAllListeners('flowplan:always-on-top-changed');
        ipcRenderer.on('flowplan:always-on-top-changed', (_event, flag) => callback(Boolean(flag)));
      },
      onMenuExport: (callback) => {
        ipcRenderer.removeAllListeners('flowplan:menu-export');
        ipcRenderer.on('flowplan:menu-export', () => callback());
      },
      onMenuImport: (callback) => {
        ipcRenderer.removeAllListeners('flowplan:menu-import');
        ipcRenderer.on('flowplan:menu-import', () => callback());
      }
    });
  `;
  fs.writeFileSync(preloadPath, preloadCode, 'utf-8');
  return preloadPath;
};

function setupApplicationMenu(mainWindow) {
  const isMac = process.platform === 'darwin';
  const template = [
    ...(isMac ? [{ role: 'appMenu' }] : []),
    {
      label: 'File',
      submenu: [
        {
          label: 'Import Data (Upload Backup)...',
          accelerator: 'CmdOrCtrl+O',
          click: () => {
            if (mainWindow && !mainWindow.isDestroyed()) {
              mainWindow.webContents.send('flowplan:menu-import');
            }
          }
        },
        {
          label: 'Export Data (Save Backup)...',
          accelerator: 'CmdOrCtrl+S',
          click: () => {
            if (mainWindow && !mainWindow.isDestroyed()) {
              mainWindow.webContents.send('flowplan:menu-export');
            }
          }
        },
        { type: 'separator' },
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    { role: 'windowMenu' }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

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
    autoHideMenuBar: false,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      backgroundThrottling: false
    }
  });

  mainWindowRef = mainWindow;
  setupApplicationMenu(mainWindow);

  // Distinguish explicit user window minimize (SC_MINIMIZE = 0xF020) from Windows "Show Desktop" (Win+D)
  if (process.platform === 'win32' && typeof mainWindow.hookWindowMessage === 'function') {
    try {
      mainWindow.hookWindowMessage(0x0112, (wParam) => {
        try {
          const cmd = wParam.readUInt32LE(0) & 0xfff0;
          if (cmd === 0xf020) {
            explicitUserMinimizePending = true;
            if (isAlwaysOnTopActive) {
              applyAlwaysOnTopState(mainWindow, false, true);
            }
          }
        } catch (e) {}
      });
    } catch (e) {}
  }

  mainWindow.on('minimize', () => {
    if (explicitUserMinimizePending) {
      explicitUserMinimizePending = false;
      if (isAlwaysOnTopActive) {
        applyAlwaysOnTopState(mainWindow, false, true);
      }
      return;
    }
    // Triggered by Windows "Show Desktop" (Win+D): keep Mini Clock visible on desktop if Always on Top is active
    if (isMiniClockActive && isAlwaysOnTopActive) {
      setTimeout(() => {
        if (mainWindow && !mainWindow.isDestroyed() && isMiniClockActive && isAlwaysOnTopActive) {
          try {
            mainWindow.restore();
            mainWindow.showInactive();
            elevateWindowTopMost(mainWindow);
          } catch (e) {}
        }
      }, 15);
    } else if (isAlwaysOnTopActive) {
      applyAlwaysOnTopState(mainWindow, false, true);
    }
  });

  mainWindow.on('blur', () => {
    // When "Show Desktop" raises WorkerW above normal windows, re-elevate Mini Clock above WorkerW without stealing focus
    if (isMiniClockActive && isAlwaysOnTopActive && !explicitUserMinimizePending) {
      setTimeout(() => {
        if (mainWindow && !mainWindow.isDestroyed() && isMiniClockActive && isAlwaysOnTopActive && !explicitUserMinimizePending) {
          try {
            if (mainWindow.isMinimized()) {
              mainWindow.restore();
            }
            if (!mainWindow.isVisible()) {
              mainWindow.showInactive();
            }
            elevateWindowTopMost(mainWindow);
          } catch (e) {}
        }
      }, 20);
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