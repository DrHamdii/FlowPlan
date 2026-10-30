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

const logUpdater = (msg) => {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${msg}\n`;
  try {
    const logPath = path.join(app.getPath('userData'), 'flowplan-updater.log');
    fs.appendFileSync(logPath, line, 'utf-8');
  } catch (e) {}
  console.log('[AutoUpdater]', msg);
};

let autoUpdaterInstance = null;

const initAutoUpdater = (mainWindow) => {
  if (!app.isPackaged) {
    logUpdater('Skipping auto-updater in unpackaged development mode');
    return;
  }
  try {
    const { autoUpdater } = require('electron-updater');
    autoUpdaterInstance = autoUpdater;
    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;
    autoUpdater.disableDifferentialDownload = true; // Use full installer download for maximum reliability across devices

    autoUpdater.logger = {
      info: (msg) => logUpdater(typeof msg === 'object' ? JSON.stringify(msg) : String(msg)),
      warn: (msg) => logUpdater('[WARN] ' + (typeof msg === 'object' ? JSON.stringify(msg) : String(msg))),
      error: (msg) => logUpdater('[ERROR] ' + (typeof msg === 'object' ? JSON.stringify(msg) : String(msg))),
      debug: () => {}
    };

    autoUpdater.on('checking-for-update', () => {
      logUpdater('Checking for updates on GitHub (DrHamdii/FlowPlan)...');
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('flowplan:updater-status', { status: 'checking', text: 'Checking for updates...' });
      }
    });

    autoUpdater.on('update-available', (info) => {
      logUpdater(`Update available: v${info.version}`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('flowplan:updater-status', {
          status: 'available',
          version: info.version,
          text: `Update v${info.version} is available and downloading...`
        });
      }
    });

    autoUpdater.on('update-not-available', (info) => {
      logUpdater(`Application is up to date (current: v${app.getVersion()})`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('flowplan:updater-status', {
          status: 'up-to-date',
          version: app.getVersion(),
          text: `FlowPlan is up to date (v${app.getVersion()}).`
        });
      }
    });

    autoUpdater.on('error', (err) => {
      const errMsg = (err && err.message) || String(err);
      logUpdater(`Auto-updater error: ${errMsg}`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('flowplan:updater-status', {
          status: 'error',
          error: errMsg,
          text: `Update check error: ${errMsg}`
        });
      }
    });

    autoUpdater.on('download-progress', (progress) => {
      const pct = Math.round(progress.percent || 0);
      logUpdater(`Download progress: ${pct}%`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('flowplan:updater-status', {
          status: 'downloading',
          percent: pct,
          text: `Downloading update: ${pct}%`
        });
      }
    });

    autoUpdater.on('update-downloaded', (info) => {
      logUpdater(`Update v${info.version} successfully downloaded`);
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('flowplan:updater-status', {
          status: 'downloaded',
          version: info.version,
          text: `Update v${info.version} ready to install.`
        });

        dialog.showMessageBox(mainWindow, {
          type: 'info',
          buttons: ['Restart & Install Now', 'Later'],
          defaultId: 0,
          cancelId: 1,
          title: 'Update Ready to Install',
          message: `FlowPlan v${info.version} has been downloaded.`,
          detail: 'Would you like to restart the application now to apply the update?'
        }).then((res) => {
          if (res.response === 0) {
            autoUpdater.quitAndInstall(false, true);
          }
        });
      }
    });

    // Check for updates on startup
    autoUpdater.checkForUpdates().catch((err) => {
      logUpdater(`Startup update check error: ${err && err.message}`);
    });

    // Periodic check every 4 hours while app remains running
    setInterval(() => {
      if (autoUpdaterInstance) {
        autoUpdaterInstance.checkForUpdates().catch((err) => {
          logUpdater(`Periodic update check error: ${err && err.message}`);
        });
      }
    }, 4 * 60 * 60 * 1000);
  } catch (e) {
    logUpdater(`Failed to initialize auto-updater: ${e && e.message}`);
  }
};

// Disable background throttling for instant response
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-renderer-backgrounding');

// Explicit Dev Mode detection: true ONLY when running unpackaged via 'npm run dev' (--dev argument) or FLOWPLAN_DEV=1
const isDevMode = !app.isPackaged && (process.argv.includes('--dev') || process.env.FLOWPLAN_DEV === '1');

// Synchronized data engine: ensures dev and production files remain 100% in sync
const getStateFilePath = () => {
  const fileName = isDevMode ? 'flowplan-desktop-data-dev.json' : 'flowplan-desktop-data.json';
  return path.join(app.getPath('userData'), fileName);
};

const loadStateSync = () => {
  try {
    const devPath = path.join(app.getPath('userData'), 'flowplan-desktop-data-dev.json');
    const prodPath = path.join(app.getPath('userData'), 'flowplan-desktop-data.json');
    const currentTarget = isDevMode ? devPath : prodPath;

    let devObj = null, prodObj = null;
    let devRaw = null, prodRaw = null;
    if (fs.existsSync(devPath)) {
      try {
        devRaw = fs.readFileSync(devPath, 'utf-8');
        devObj = JSON.parse(devRaw);
      } catch (e) {}
    }
    if (fs.existsSync(prodPath)) {
      try {
        prodRaw = fs.readFileSync(prodPath, 'utf-8');
        prodObj = JSON.parse(prodRaw);
      } catch (e) {}
    }

    // One-time clean reset so the user starts fresh with 0 coins, 0 playground animals, and no sanctuary pet
    [devObj, prodObj].forEach((obj, idx) => {
      if (obj && !obj.petsCleanStartV2) {
        obj.pets = {
          coins: 0,
          accumulatedFocusMinutes: 0,
          coinsGrantedTotal: 0,
          playgroundTheme: 'meadow',
          inventory: {},
          sanctuaryPet: null,
          graduatedPets: []
        };
        obj.petsCleanStartV2 = true;
        obj.lastSavedAt = Date.now();
        const p = idx === 0 ? devPath : prodPath;
        try { fs.writeFileSync(p, JSON.stringify(obj, null, 2), 'utf-8'); } catch (e) {}
        if (idx === 0) devRaw = JSON.stringify(obj);
        if (idx === 1) prodRaw = JSON.stringify(obj);
      }
    });

    let chosenRaw = null;
    if (devObj && prodObj) {
      const devTs = Number(devObj.lastSavedAt) || 0;
      const prodTs = Number(prodObj.lastSavedAt) || 0;
      if (devTs > prodTs) {
        chosenRaw = devRaw;
        try { fs.writeFileSync(prodPath, devRaw, 'utf-8'); } catch (e) {}
      } else {
        chosenRaw = prodRaw;
        try { fs.writeFileSync(devPath, prodRaw, 'utf-8'); } catch (e) {}
      }
    } else if (devObj) {
      chosenRaw = devRaw;
      try { fs.writeFileSync(prodPath, devRaw, 'utf-8'); } catch (e) {}
    } else if (prodObj) {
      chosenRaw = prodRaw;
      try { fs.writeFileSync(devPath, prodRaw, 'utf-8'); } catch (e) {}
    }

    if (chosenRaw) return chosenRaw;
    if (fs.existsSync(currentTarget)) return fs.readFileSync(currentTarget, 'utf-8');
  } catch (err) {
    console.error('Failed to read desktop state file:', err);
  }
  return null;
};

const saveStateSync = (serializedJson) => {
  if (typeof serializedJson !== 'string' || !serializedJson.trim()) return;
  try {
    const devPath = path.join(app.getPath('userData'), 'flowplan-desktop-data-dev.json');
    const prodPath = path.join(app.getPath('userData'), 'flowplan-desktop-data.json');
    // Save to BOTH files simultaneously so dev and production are ALWAYS 100% synchronized!
    fs.writeFileSync(prodPath, serializedJson, 'utf-8');
    fs.writeFileSync(devPath, serializedJson, 'utf-8');
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

ipcMain.on('flowplan:read-binary-file', (event, relativePath) => {
  try {
    const cleanRel = String(relativePath || '').replace(/^\/+/, '');
    const fullPath = path.join(__dirname, cleanRel);
    if (fs.existsSync(fullPath)) {
      event.returnValue = fs.readFileSync(fullPath);
      return;
    }
  } catch (e) {
    console.warn('IPC read-binary-file error:', e);
  }
  event.returnValue = null;
});

ipcMain.on('flowplan:manual-check-updates', () => {
  if (!app.isPackaged) {
    if (mainWindowRef && !mainWindowRef.isDestroyed()) {
      dialog.showMessageBox(mainWindowRef, {
        type: 'info',
        title: 'Check for Updates',
        message: 'Auto-update is disabled in development mode.'
      });
    }
    return;
  }
  if (autoUpdaterInstance) {
    logUpdater('Manual update check requested by renderer');
    autoUpdaterInstance.checkForUpdates().then((result) => {
      if (!result || !result.updateInfo || result.updateInfo.version === app.getVersion()) {
        if (mainWindowRef && !mainWindowRef.isDestroyed()) {
          dialog.showMessageBox(mainWindowRef, {
            type: 'info',
            title: 'Check for Updates',
            message: 'You have the latest version of FlowPlan!',
            detail: `Current version: v${app.getVersion()}`
          });
        }
      }
    }).catch((err) => {
      logUpdater(`Manual update error: ${err && err.message}`);
      if (mainWindowRef && !mainWindowRef.isDestroyed()) {
        dialog.showMessageBox(mainWindowRef, {
          type: 'error',
          title: 'Update Error',
          message: 'Unable to check for updates.',
          detail: ((err && err.message) || String(err)) + '\n\nMake sure your device has internet access and release artifacts are published on GitHub.'
        });
      }
    });
  }
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
      isPackaged: ${Boolean(app.isPackaged)},
      isDev: ${Boolean(isDevMode)},
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
      readBinaryAssetSync: (relativePath) => ipcRenderer.sendSync('flowplan:read-binary-file', relativePath),
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
      },
      onUpdaterStatus: (callback) => {
        ipcRenderer.removeAllListeners('flowplan:updater-status');
        ipcRenderer.on('flowplan:updater-status', (_event, data) => callback(data));
      },
      checkForUpdates: () => ipcRenderer.send('flowplan:manual-check-updates')
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
    {
      label: 'View',
      submenu: isDevMode
        ? [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
          ]
        : [
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
          ]
    },
    { role: 'windowMenu' },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Check for Updates...',
          click: () => {
            if (!app.isPackaged) {
              dialog.showMessageBox(mainWindow, {
                type: 'info',
                title: 'Check for Updates',
                message: 'Auto-update is disabled in development mode.'
              });
              return;
            }
            if (autoUpdaterInstance) {
              logUpdater('Manual check for updates triggered from Help menu');
              dialog.showMessageBox(mainWindow, {
                type: 'info',
                title: 'Checking for Updates',
                message: 'Checking GitHub for FlowPlan updates...'
              });
              autoUpdaterInstance.checkForUpdates().then((res) => {
                if (!res || !res.updateInfo || res.updateInfo.version === app.getVersion()) {
                  dialog.showMessageBox(mainWindow, {
                    type: 'info',
                    title: 'FlowPlan is Up to Date',
                    message: `You are on the latest version of FlowPlan (v${app.getVersion()}).`
                  });
                }
              }).catch((err) => {
                dialog.showMessageBox(mainWindow, {
                  type: 'error',
                  title: 'Update Check Failed',
                  message: 'Could not connect to update server.',
                  detail: (err && err.message) || String(err)
                });
              });
            }
          }
        },
        { type: 'separator' },
        {
          label: `About FlowPlan (v${app.getVersion()})`,
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About FlowPlan',
              message: `FlowPlan v${app.getVersion()}`,
              detail: 'Daily, Weekly & Monthly Focus Planner with Pet Sanctuary & Pomodoro Timer'
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function createMainWindow() {
  const initialState = loadStateSync();
  const preloadPath = ensurePreloadFile(initialState);
  const appIconPath = path.join(
    __dirname,
    'assets',
    process.platform === 'win32' ? 'icon.ico' : 'icon.png'
  );

  const mainWindow = new BrowserWindow({
    width: 1380,
    height: 880,
    minWidth: 940,
    minHeight: 640,
    icon: appIconPath,
    title: isDevMode
      ? 'FlowPlan [DEV BUILD] — Isolated Test Sandbox'
      : 'FlowPlan — Daily, Weekly & Monthly Focus Planner',
    backgroundColor: '#090d16',
    show: false,
    autoHideMenuBar: false,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      webSecurity: false,
      backgroundThrottling: false,
      devTools: Boolean(isDevMode)
    }
  });

  // Block developer tools shortcuts in production/installer builds
  if (!isDevMode) {
    mainWindow.webContents.on('before-input-event', (event, input) => {
      const key = (input.key || '').toLowerCase();
      if (
        (input.control && input.shift && ['i', 'j', 'c'].includes(key)) ||
        key === 'f12'
      ) {
        event.preventDefault();
      }
    });
  }

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
  initAutoUpdater(mainWindowRef);

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