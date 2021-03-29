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
    for (var index = 0; !numbers[index]; index += 1) ;
    biggestNumber = numbers[index];
    biggestNumberIndex = index;
    for (let number of numbers) {
      if (numbers[numbers.indexOf(number)] > biggestNumber) {
        biggestNumberIndex = numbers.indexOf(number);
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
    for (var index = 0; !numbers[index]; index += 1) ;
    smallestNumber = numbers[index];
    smallestNumberIndex = index;
    for (let number of numbers) {
      if (numbers[numbers.indexOf(number)] < smallestNumber) {
        smallestNumberIndex = numbers.indexOf(number);
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

// Exercise 5
function getMostFrequentNumber(numbers) {
  let numberFrequencies = [];

  for (let number of numbers) {
    if(!numberFrequencies[number]) {
      numberFrequencies[number] = 1;
    } else {
      numberFrequencies[number] += 1;
    }
  }

  return getBiggestNumberIndex(numberFrequencies);
}

console.log('isPalindrome:', isPalindrome('madam'));
console.log('getBiggestNumberIndex:', getBiggestNumberIndex([2, 3, 6, 7, 10, 1]));
console.log('getSmallestNumberIndex:', getSmallestNumberIndex([2, 4, 6, 7, 10, 0, -3]));
console.log('getBiggestName:', getBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log('getMostFrequentNumber:', getMostFrequentNumber([2, 3, 2, 5, 8, 2, 3]));