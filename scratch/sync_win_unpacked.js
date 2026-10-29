const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const resourcesDir = path.join(projectRoot, 'dist', 'win-unpacked', 'resources');
const appDir = path.join(resourcesDir, 'app');

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// 1. Copy daily_weekly_planner.html
fs.copyFileSync(
  path.join(projectRoot, 'daily_weekly_planner.html'),
  path.join(appDir, 'daily_weekly_planner.html')
);
console.log('Copied daily_weekly_planner.html');

// 2. Copy main.js
fs.copyFileSync(
  path.join(projectRoot, 'main.js'),
  path.join(appDir, 'main.js')
);
console.log('Copied main.js');

// 3. Copy package.json
fs.copyFileSync(
  path.join(projectRoot, 'package.json'),
  path.join(appDir, 'package.json')
);
console.log('Copied package.json');

// 4. Recursive copy helper
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 5. Copy assets/
console.log('Copying assets (including assets/three)...');
copyDirSync(path.join(projectRoot, 'assets'), path.join(appDir, 'assets'));
console.log('Assets copied.');

// 6. Remove app.asar if present so Electron uses resources/app/
const asarPath = path.join(resourcesDir, 'app.asar');
if (fs.existsSync(asarPath)) {
  fs.unlinkSync(asarPath);
  console.log('Removed obsolete app.asar - Electron now uses unpacked resources/app directory');
}

console.log('dist/win-unpacked successfully synchronized!');
