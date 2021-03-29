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
function getBiggestNumberIndex(numbers) {
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

// Exercise 3
function getSmallestNumberIndex(numbers) {
  let smallestNumber;
  let smallestNumberIndex;
  
  if (numbers.length == 0) {
    smallestNumberIndex = null;
  } else {
    smallestNumber = numbers[0];
    smallestNumberIndex = 0;
    if (numbers.length > 1) {
      for (let index = 1; index < numbers.length; index += 1) {
        if (numbers[index] < smallestNumber) {
          smallestNumberIndex = index;
        }
      }
    }
  }

  return smallestNumberIndex;
}

// Exercise 4
function getBiggestName(names) {
  let biggestName;
  
  if (names.length == 0) {
    biggestName = null;
  } else {
    biggestName = names[0];
    for (let name of names) {
      if (name.length > biggestName.length) {
        biggestName = name;
      }
    }
  }

  return biggestName;
}

console.log('isPalindrome:', isPalindrome('madam'));
console.log('getBiggestNumberIndex:', getBiggestNumberIndex([2, 3, 6, 7, 10, 1]));
console.log('getSmallestNumberIndex:', getSmallestNumberIndex([2, 4, 6, 7, 10, 0, -3]));
console.log('getBiggestName:', getBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));