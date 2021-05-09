const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let vowels = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index].toLowerCase() === 'a' ||
      characters[index].toLowerCase() === 'o' ||
      characters[index].toLowerCase() === 'i' ||
      characters[index].toLowerCase() === 'e' ||
      characters[index].toLowerCase() === 'u'
    ) {
      vowels += 1;
      results += vowels;
    } else {
      results += characters[index];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
assert.strictEqual(removeVowels('Amanda'), '1m2nd3');