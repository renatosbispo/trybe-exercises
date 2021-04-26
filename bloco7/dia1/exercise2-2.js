const getWords = phrase => {
  phrase = phrase.replace(/[.,!?;:'"(){}\[\]\+=\-\*\%\$0-9]/g, '');
  phrase = phrase.trim();

  return phrase.split(/\s+/);
}

const longestWord = phrase => {
  let words = getWords(phrase);

  words.sort((a, b) => a.length - b.length);

  return words[words.length - 1];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));