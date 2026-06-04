// fix-encoding.js
// Fixes mojibake (UTF-8 text mis-decoded as Latin-1) in all TSX/TS source files

const fs = require('fs');
const path = require('path');

// Map of broken latin-1 sequences → correct UTF-8 characters
const REPLACEMENTS = [
  // Common French accents
  ['Ã©', 'é'],
  ['Ã¨', 'è'],
  ['Ã ', 'à'],
  ['Ã¢', 'â'],
  ['Ã®', 'î'],
  ['Ã´', 'ô'],
  ['Ã»', 'û'],
  ['Ã§', 'ç'],
  ['Ã¯', 'ï'],
  ['Ã«', 'ë'],
  ['Ãª', 'ê'],
  ['Ã¹', 'ù'],
  ['Ã¼', 'ü'],
  ['Ã ', 'à'],
  ['Ã¡', 'á'],
  ['Ã³', 'ó'],
  ['Ã±', 'ñ'],
  // Capital accents
  ['Ã‰', 'É'],
  ['Ã€', 'À'],
  ['Ã‡', 'Ç'],
  ['Ãœ', 'Ü'],
  // Ligatures & special
  ['â€™', "'"],
  ['â€˜', "'"],
  ['â€œ', '"'],
  ['â€', '"'],
  ['â€"', '–'],
  ['â€"', '—'],
  ['Â«', '«'],
  ['Â»', '»'],
  ['Â©', '©'],
  ['Â°', '°'],
  // Specific patterns seen in this project
  ['Ã¹', 'ù'],
  ['Ã¦', 'æ'],
  ['Â', ''],   // stray  character
];

let totalFiles = 0;
let fixedFiles = 0;

function fixContent(content) {
  let fixed = content;
  for (const [broken, correct] of REPLACEMENTS) {
    fixed = fixed.split(broken).join(correct);
  }
  return fixed;
}

function walk(dir) {
  let entries;
  try { entries = fs.readdirSync(dir); } catch (e) { return; }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    let stat;
    try { stat = fs.statSync(fullPath); } catch (e) { continue; }
    if (stat.isDirectory()) {
      if (entry === 'node_modules' || entry === '.next' || entry === '.git') continue;
      walk(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      totalFiles++;
      const content = fs.readFileSync(fullPath, 'utf8');
      const fixed = fixContent(content);
      if (fixed !== content) {
        fs.writeFileSync(fullPath, fixed, 'utf8');
        console.log('Fixed: ' + fullPath);
        fixedFiles++;
      }
    }
  }
}

walk('src');
console.log(`\nDone. Fixed ${fixedFiles} / ${totalFiles} files.`);
