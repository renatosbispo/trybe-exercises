const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Test 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// Test 2
assert.strictEqual(myFizzBuzz(9), 'fizz');
// Test 3
assert.strictEqual(myFizzBuzz(10), 'buzz');
// Test 4
assert.strictEqual(myFizzBuzz(8), 8);
// Test 5
assert.strictEqual(myFizzBuzz('a'), false);