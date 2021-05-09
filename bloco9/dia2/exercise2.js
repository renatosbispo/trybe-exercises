const myPromise = new Promise((resolve, reject) => {
  let numbers = Array.from(Array(10).keys()).map(() => Math.random() * (50 - 1) + 1);
  numbers = numbers.map(x => parseInt(x) ** 2);
  let sum = numbers.reduce((sum, x) => sum + x);

  if (sum < 8000) resolve(`[PROMISE RESOLVED] Sum = ${sum}`);
  else reject(new Error(`[PROMISE REJECTED] Sum = ${sum}`));
});

myPromise
  .then(response => console.log(response))
  .catch(error => console.log(error));