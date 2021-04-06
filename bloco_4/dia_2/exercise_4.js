let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let amountOfNums = numbers.length;
let sum = 0;
let average = 0;

for (let number of numbers) {
  sum += number;
}

if (amountOfNums != 0) {
  average = sum / amountOfNums;
  if (average > 20) {
    console.log('Average > 20.');
  } else {
    console.log('Average < 20.');
  }
} else {
  console.log('The array is empty.');
}