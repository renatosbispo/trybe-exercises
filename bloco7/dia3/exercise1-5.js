const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Test 1
assert.deepStrictEqual(obj1, obj2);
// Test 2
assert.deepStrictEqual(obj1, obj3);
// Test 3
assert.deepStrictEqual(obj2, obj3);