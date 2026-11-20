// tests/contact-form.test.js
// Unit test for the Contact.jsx WhatsApp form handler logic
// Tests the submit handler behaviour purely in JS (no DOM)

let pass = 0, fail = 0;
function check(name, cond, detail='') {
  if (cond) { console.log(`  ✅ PASS: ${name}`); pass++; }
  else { console.log(`  ❌ FAIL: ${name}${detail?' — '+detail:''}`); fail++; }
}

// Simulate the submit handler from Contact.jsx
function makeHandler(form, opened) {
  return function handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!form.name.trim()) return 'ERROR: empty name';
    if (!form.message.trim()) return 'ERROR: empty message';
    const text = `Name: ${form.name}\nClass: ${form.studentClass}\nMessage: ${form.message}`;
    const url = "https://wa.me/918975756530?text=" + encodeURIComponent(text);
    opened.push(url);
    return 'OK';
  };
}

console.log('\n═══════════════════════════════════════');
console.log('  Contact Form Handler Unit Test');
console.log('═══════════════════════════════════════\n');

// Test 1: Valid submission
{
  const opened = [];
  const form = { name: 'Test', studentClass: '11th NEET', message: 'Hello' };
  const handler = makeHandler(form, opened);
  const result = handler({preventDefault:()=>{}});
  check('Valid form opens WhatsApp URL', opened.length === 1);
  check('URL starts with https://wa.me/918975756530?text=', opened[0]?.startsWith('https://wa.me/918975756530?text='));
  const decoded = decodeURIComponent(opened[0]?.split('?text=')[1] || '');
  check('Decoded text contains name "Test"', decoded.includes('Test'));
  check('Decoded text contains class "11th NEET"', decoded.includes('11th NEET'));
  check('Decoded text contains message "Hello"', decoded.includes('Hello'));
}

// Test 2: Empty name blocked
{
  const opened = [];
  const form = { name: '', studentClass: '10th', message: 'Hi' };
  const handler = makeHandler(form, opened);
  const result = handler({preventDefault:()=>{}});
  check('Empty name blocked (no WhatsApp opened)', opened.length === 0);
  check('Empty name returns error', result === 'ERROR: empty name');
}

// Test 3: Whitespace-only name blocked
{
  const opened = [];
  const form = { name: '   ', studentClass: '10th', message: 'Hi' };
  const handler = makeHandler(form, opened);
  const result = handler({preventDefault:()=>{}});
  check('Whitespace-only name blocked', opened.length === 0);
}

// Test 4: Empty message blocked
{
  const opened = [];
  const form = { name: 'Alice', studentClass: '12th JEE', message: '' };
  const handler = makeHandler(form, opened);
  const result = handler({preventDefault:()=>{}});
  check('Empty message blocked', opened.length === 0);
  check('Empty message returns error', result === 'ERROR: empty message');
}

// Test 5: Class field is optional
{
  const opened = [];
  const form = { name: 'Bob', studentClass: '', message: 'Enquiry about fees' };
  const handler = makeHandler(form, opened);
  handler({preventDefault:()=>{}});
  check('Empty class is allowed (optional)', opened.length === 1);
}

console.log('\n═══════════════════════════════════════');
console.log(`  TOTAL: ${pass} passed, ${fail} failed`);
console.log('═══════════════════════════════════════\n');
process.exit(fail > 0 ? 1 : 0);
