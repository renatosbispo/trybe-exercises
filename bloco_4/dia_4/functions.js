// Exercise 1
function isPalindrome(word) {
  let wordReversed = '';
  let answer = false;
  word = word.toLowerCase();
  
  for (let index = word.length - 1; index >= 0; index -= 1) {
    wordReversed += word[index];
  }
  
  if (word == wordReversed) {
    answer = true;
  }

  return answer;
}

// Exercise 2
function biggestNumberIndex(numbers) {
  let biggestNumber;
  let biggestNumberIndex;
  
  if (numbers.length == 0) {
    biggestNumberIndex = null;
  } else {
    biggestNumber = numbers[0];
    biggestNumberIndex = 0;
    if (numbers.length > 1) {
      for (let index = 1; index < numbers.length; index += 1) {
        if (numbers[index] > biggestNumber) {
          biggestNumberIndex = index;
        }
      }
    }
  }

  return biggestNumberIndex;
}

// Exercise 2
function biggestNumberIndex(numbers) {
  let biggestNumber;
  let biggestNumberIndex;
  
  if (numbers.length == 0) {
    biggestNumberIndex = null;
  } else {
    biggestNumber = numbers[0];
    biggestNumberIndex = 0;
    if (numbers.length > 1) {
      for (let index = 1; index < numbers.length; index += 1) {
        if (numbers[index] > biggestNumber) {
          biggestNumberIndex = index;
        }
      }
    }
  }

  return biggestNumberIndex;
}

console.log('isPalindrome:', isPalindrome('madam'));
console.log('biggestNumberIndex:', biggestNumberIndex([2, 3, 6, 7, 10, 1]));