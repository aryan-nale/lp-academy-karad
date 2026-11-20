// tests/content.test.js
// Content verification for LP Academy conversion
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'frontend', 'src');
const IDX = path.join(__dirname, '..', 'frontend', 'index.html');

function readAll(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...readAll(full));
    else if (/\.(jsx|js|html)$/.test(entry.name)) results.push({ file: full, content: fs.readFileSync(full, 'utf8') });
  }
  return results;
}

const files = readAll(SRC);
files.push({ file: IDX, content: fs.readFileSync(IDX, 'utf8') });

let pass = 0, fail = 0;
function check(name, cond, detail = '') {
  if (cond) { console.log(`  ✅ PASS: ${name}`); pass++; }
  else { console.log(`  ❌ FAIL: ${name}${detail ? ' — ' + detail : ''}`); fail++; }
}

console.log('\n═══════════════════════════════════════');
console.log('  LP Academy Content Test');
console.log('═══════════════════════════════════════\n');

// A: Banned strings — must NOT exist in any public-facing file (skip dashboard files)
const publicFiles = files.filter(f => !f.file.includes('Dashboard') && !f.file.includes('dashboard'));
const allContent = publicFiles.map(f => f.content).join('\n');

console.log('CHECK A: Banned strings');
['Ace Academy', 'Raipur', 'Bhanpuri', 'Shrinagar', 'CBSE', 'ICSE', 'monetag', '8053515171', 'Muskan Kalra', 'mathswithmuskankalra'].forEach(banned => {
  // Allow "Ace" in SVG path data (d="...") — skip that
  const occurrences = publicFiles.filter(f => {
    // Skip SVG path data
    const stripped = f.content.replace(/d="[^"]*"/g, '').replace(/d='[^']*'/g, '');
    return stripped.toLowerCase().includes(banned.toLowerCase());
  });
  check(`No "${banned}" in public files`, occurrences.length === 0, 
    occurrences.length ? occurrences.map(f=>path.basename(f.file)).join(', ') : '');
});

// B: Required content
console.log('\nCHECK B: Required content');
check('index.html has LP Academy title', files.find(f=>f.file===IDX)?.content.includes('LP Academy, Karad - Build Foundations. Crack Entrances.'));
check('index.html has meta description', files.find(f=>f.file===IDX)?.content.includes('LP Academy (Ligade-Patil Junior College of Science)'));
check('WhatsApp link 918975756530 exists', allContent.includes('wa.me/918975756530'));
check('tel:+918975756530 exists', allContent.includes('tel:+918975756530'));
check('No old phone 8053515171', !allContent.includes('8053515171'));
check('Rs 40,000 (Foundation) in content', allContent.includes('40,000'));
check('Rs 80,000 (11-12) in content', allContent.includes('80,000'));
check('Rs 70,000 (Hostel) in content', allContent.includes('70,000'));
check('Prof. Bajirao Patil in content', allContent.includes('Prof. Bajirao Patil'));
check('Prof. Vijay Ligade in content', allContent.includes('Prof. Vijay Ligade'));

// C: Results page checks
console.log('\nCHECK C: Results page');
const resultsFile = files.find(f => f.file.includes('Results.jsx'));
if (resultsFile) {
  const rc = resultsFile.content;
  check('Results has consent line', rc.includes('[CONFIRM: student consent]'));
  check('Results has Swarali Patil', rc.includes('Swarali Patil'));
  check('Results has JEE Advanced section', rc.includes('JEE Advanced'));
  check('Results has MHT-CET section', rc.includes('MHT-CET'));
  check('Results has NEET CAP-II section', rc.includes('CAP-II'));
  check('Results has Sanjana Dhas AIR 2068', rc.includes('2068'));
  // No 9+ digit numbers (application/roll numbers)
  const nineDigit = rc.match(/\b\d{9,}\b/g);
  check('Results has no 9+ digit numbers', !nineDigit, nineDigit ? nineDigit.join(', ') : '');
} else {
  check('Results.jsx exists', false, 'File not found');
}

// D: CONFIRM markers
console.log('\nCHECK D: [CONFIRM] markers remaining');
const confirmMarkers = [];
publicFiles.forEach(f => {
  const matches = [...f.content.matchAll(/\[CONFIRM[^\]]*\]/g)];
  matches.forEach(m => confirmMarkers.push({ file: path.basename(f.file), text: m[0] }));
});
console.log(`  Found ${confirmMarkers.length} [CONFIRM] marker(s):`);
confirmMarkers.forEach(m => console.log(`    • ${m.file}: ${m.text}`));

// E: CSS files untouched (check git diff)
console.log('\nCHECK E: CSS/JS protected files');
const { execSync } = require('child_process');
try {
  const diff = execSync('git diff HEAD -- "*.css" "frontend/src/index.css" "frontend/src/App.css"', { cwd: path.join(__dirname, '..'), encoding: 'utf8' });
  check('No CSS files changed', diff.trim() === '', 'CSS diff detected');
} catch(e) {
  console.log('  ⚠️  Could not run git diff — skipping CSS check');
}

// F: New pages exist
console.log('\nCHECK F: New pages exist');
['About', 'Teachers', 'Facilities', 'Contact', 'Results'].forEach(page => {
  check(`${page}.jsx exists`, !!files.find(f => f.file.includes(`${page}.jsx`)));
});

// G: Routes registered in App.jsx
console.log('\nCHECK G: Routes in App.jsx');
const appFile = files.find(f => f.file.includes('App.jsx'));
if (appFile) {
  ['/about', '/teachers', '/facilities', '/contact', '/results'].forEach(route => {
    check(`Route "${route}" in App.jsx`, appFile.content.includes(`path="${route}"`));
  });
}

console.log('\n═══════════════════════════════════════');
console.log(`  TOTAL: ${pass} passed, ${fail} failed`);
console.log('═══════════════════════════════════════\n');

process.exit(fail > 0 ? 1 : 0);
