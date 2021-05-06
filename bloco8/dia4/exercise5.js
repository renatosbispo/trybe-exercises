
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((counter, word) => counter + (word.match(/[aA]/g) ? word.match(/[aA]/g).length : 0), 0);
}

assert.deepStrictEqual(containsA(), 20);