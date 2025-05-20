const { add } = require('./index');

// Simple test
const result = add(2, 3);
const expected = 5;

if (result !== expected) {
  console.error(`Test failed! Expected ${expected} but got ${result}`);
  process.exit(1);
}

console.log('Test passed!');
process.exit(0);
