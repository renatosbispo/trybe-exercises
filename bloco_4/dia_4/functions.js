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

// Exercise 6
function getSummation(n) {
  let summation = 0;

  for (let index = 1; index <= n; index += 1) {
    summation += index; 
  }

  return summation;
}

// Exercise 7
function isEndingOf(word, ending) {
  let answer = true;
  
  for (let endingIndex = ending.length - 1, wordIndex = word.length - 1; endingIndex >= 0 && answer; endingIndex -= 1, wordIndex -= 1) {
    if (ending[endingIndex] != word[wordIndex]) {
      answer = false;
    }
  }

  return answer;
}

console.log('1. isPalindrome:', isPalindrome('madam'));
console.log('2. getBiggestNumberIndex:', getBiggestNumberIndex([2, 3, 6, 7, 10, 1]));
console.log('3. getSmallestNumberIndex:', getSmallestNumberIndex([2, 4, 6, 7, 10, 0, -3]));
console.log('4. getBiggestName:', getBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log('5. getMostFrequentNumber:', getMostFrequentNumber([2, 3, 2, 5, 8, 2, 3]));
console.log('6. getSummation:', getSummation(5));
console.log('7. isEndingOf:', isEndingOf('trybe', 'be'));