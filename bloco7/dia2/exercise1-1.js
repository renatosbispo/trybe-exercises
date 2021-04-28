const assert = require('assert');

const errorMessage = 'parameters must be numbers';

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error(errorMessage);
  }

  return a + b;
}

// Unit tests
const tests = [
  {
    a: 4,
    b: 5,
    expected: 9,
  },
  {
    a: 0,
    b: 0,
    expected: 0,
  },
];

tests.forEach(test => assert.strictEqual(sum(test.a, test.b), test.expected));
assert.throws(() => sum(4, '5'), /^Error: parameters must be numbers$/);