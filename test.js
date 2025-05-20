const { add, sumArray } = require('./index');

// Test add function
const addResult = add(2, 3);
const addExpected = 5;

if (addResult !== addExpected) {
  console.error(`Add test failed! Expected ${addExpected} but got ${addResult}`);
  process.exit(1);
}

// Test sumArray function (uses lodash)
const sumResult = sumArray([1, 2, 3, 4, 5]);
const sumExpected = 15;

if (sumResult !== sumExpected) {
  console.error(`Sum test failed! Expected ${sumExpected} but got ${sumResult}`);
  process.exit(1);
}

console.log('All tests passed!');
process.exit(0);
