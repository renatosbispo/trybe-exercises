let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSize = numbers.length;
let indexA, indexB;

for (indexA = 1; indexA < numbersSize - 1; indexA += 1) {
  for (indexB = 0; indexB < numbersSize - indexA; indexB += 1) {
    num1 = numbers[indexB];
    num2 = numbers[indexB + 1];
    if (num1 < num2) {
      numbers[indexB] = num2;
      numbers[indexB + 1] = num1;
    }
  }
}

console.log(numbers);