const _ = require('lodash');

function add(a, b) {
  return a + b;
}

function sumArray(numbers) {
  return _.sum(numbers);
}

module.exports = { add, sumArray };
