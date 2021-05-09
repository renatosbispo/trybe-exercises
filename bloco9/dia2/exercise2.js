const myPromise = new Promise((resolve, reject) => {
  let numbers = Array.from(Array(10).keys()).map(() => Math.random() * (50 - 1) + 1);
  numbers = numbers.map(x => parseInt(x) ** 2);
  let sum = numbers.reduce((sum, x) => sum + x);

  if (sum < 8000) resolve(sum);
  else reject(new Error(`[PROMISE REJECTED] Sum = ${sum}`));
});

myPromise
  .then(response => [2, 3, 5, 10].map((x) => response / x))
  .then(result => console.log(result))
  .catch(error => console.log(error, "\nÉ mais de oito mil! Essa promise deve estar quebrada!"));