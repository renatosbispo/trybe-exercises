let numArray = [];

for (let i = 0; i < 25; i += 1) {
  numArray.push(i + 1);
}

for (let number of numArray) {
  console.log(number / 2);
}