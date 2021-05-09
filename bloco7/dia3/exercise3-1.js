const { assert } = require("assert");

const greetPeople = (people) => {
  let greeting = 'Hello ';

  return people.map((p) => greeting + p);
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);