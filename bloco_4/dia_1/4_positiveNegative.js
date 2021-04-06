let num = 42;
let result = null;

if (num > 0) {
  result = 'positive';
} else if (num < 0) {
  result = 'negative';
} else {
  result = 'zero';
}

console.log('The number is:', result + '.');