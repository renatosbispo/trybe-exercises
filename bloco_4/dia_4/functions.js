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

console.log(isPalindrome('madam'));