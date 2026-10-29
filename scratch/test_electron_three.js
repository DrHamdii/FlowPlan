const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  await win.loadFile(path.join(__dirname, '../daily_weekly_planner.html'));
  
  const result = await win.webContents.executeJavaScript(`
    (async () => {
      try {
        const THREE = await import('./node_modules/three/build/three.module.js');
        const { GLTFLoader } = await import('./node_modules/three/examples/jsm/loaders/GLTFLoader.js');
        return { success: true, revision: THREE.REVISION, hasLoader: typeof GLTFLoader === 'function' };
      } catch (err) {
        return { success: false, error: err.stack || err.message };
      }
    })()
  `);

  console.log('TEST_THREE_RESULT:', JSON.stringify(result));
  app.quit();
});
