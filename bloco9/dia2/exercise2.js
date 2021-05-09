async function promiseFunction() {
  let numbers = Array.from(Array(10).keys()).map(() => Math.floor(Math.random() * 50 + 1));
  numbers = numbers.map(x => x ** 2);
  let sum = numbers.reduce((sum, x) => sum + x);

  if (sum < 8000) return sum;
  else throw new Error(`[PROMISE REJECTED] Sum = ${sum}`);
}

promiseFunction()
  .then(response => [2, 3, 5, 10].map((x) => response / x))
  .then(result => result.reduce((sum, x) => sum + x))
  .then(finalResult => console.log(finalResult))
  .catch(error => console.log(error, "\nÉ mais de oito mil! Essa promise deve estar quebrada!"));