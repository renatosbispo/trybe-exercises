let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let amountOfNums = numbers.length;
let sum = 0;
let average = 0;

for (let number of numbers) {
  sum += number;
}

if (amountOfNums != 0) {
  average = sum / amountOfNums;
  console.log(average);
} else {
  console.log('The array is empty.');
}