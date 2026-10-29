const cp = require('child_process');
try {
  const electronPath = require('electron');
  const out = cp.spawnSync(electronPath, ['--no-sandbox', '--disable-gpu', '--headless', 'scratch/test_electron_three.js'], { encoding: 'utf8', timeout: 10000 });
  console.log('STDOUT:', out.stdout);
  console.log('STDERR:', out.stderr);
  console.log('STATUS:', out.status);
} catch (e) {
  console.error('ERROR:', e);
}
