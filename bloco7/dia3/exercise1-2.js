const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

/**************/
/* Unit Tests */
/**************/
// Test 1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// Test 2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Test 3
const testArr = [1, 2, 3, 4];
myRemove(testArr, 3);
assert.deepStrictEqual(testArr, [1, 2, 3, 4]);

// Test 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
