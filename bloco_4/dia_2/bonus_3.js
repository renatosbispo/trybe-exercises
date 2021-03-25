let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMult = [];
let index;

for (index = 0; index < numbers.length; index += 1) {
  if (index < numbers.length - 1) {
    numbersMult.push(numbers[index] * numbers[index + 1]);
  } else {
    numbersMult.push(numbers[index] * 2);
  }
}

console.log(numbersMult);