let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNums = 0;
let answer;

for (let number of numbers) {
  if (number % 2 != 0) {
    oddNums += 1;
  }
}

if (oddNums == 0) {
  answer = 'No odd numbers were found.';
} else {
  answer = oddNums.toString() + ' odd number(s) found.';
}

console.log(answer);