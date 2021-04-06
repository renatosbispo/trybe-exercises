let number = 11;
let factors = 2;
let answer;

for (let factor = 2; factor < number / 2 && factors === 2; factor += 1) {
  if (number % factor === 0) {
    factors += 1;   
  }
}

if (factors === 2) {
  answer = 'is prime';  
} else {
  answer = 'is not prime';
}

console.log(number, answer + '!');