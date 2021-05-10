const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';

  if (!people) return [];

  return people.map((p) => greeting + p);
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
assert.deepStrictEqual(greetPeople(), []);