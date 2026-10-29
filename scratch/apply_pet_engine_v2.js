const fs = require('fs');

const mainFile = 'daily_weekly_planner.html';
const content = fs.readFileSync(mainFile, 'utf8');

const petEngineCode = fs.readFileSync('scratch/pet_engine_v2.js', 'utf8');

const startMarker = '// =========================================================================\r\n// FLOWPLAN PETS SYSTEM (SANCTUARY, PLAYGROUND, 3D WANDERING, SHOP & LIFE STAGES)\r\n// =========================================================================';
const startMarkerLF = '// =========================================================================\n// FLOWPLAN PETS SYSTEM (SANCTUARY, PLAYGROUND, 3D WANDERING, SHOP & LIFE STAGES)\n// =========================================================================';

const endMarker = '    // =========================================================================\r\n    // MASTER RENDER & INITIALIZATION';
const endMarkerLF = '    // =========================================================================\n    // MASTER RENDER & INITIALIZATION';

let startIndex = content.indexOf(startMarker);
let isCRLF = true;
if (startIndex === -1) {
  startIndex = content.indexOf(startMarkerLF);
  isCRLF = false;
}

if (startIndex === -1) {
  console.error('Could not find startMarker!');
  process.exit(1);
}

const chosenEndMarker = isCRLF ? endMarker : endMarkerLF;
const endIndex = content.indexOf(chosenEndMarker, startIndex);

if (endIndex === -1) {
  console.error('Could not find endMarker!');
  process.exit(1);
}

console.log('Found range: startIndex =', startIndex, ', endIndex =', endIndex);

let newContent = content.substring(0, startIndex) +
  petEngineCode.trim() + (isCRLF ? '\r\n\r\n' : '\n\n') +
  content.substring(endIndex);

fs.writeFileSync(mainFile, newContent, 'utf8');
console.log('Successfully updated Pet Engine v2 in daily_weekly_planner.html!');
