// Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const numberDraw = (bet, checkBet) => {
  const drawnNumber = getRandomIntInclusive(1, 5);
  const won = checkBet(bet, drawnNumber);

  return won ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(numberDraw(5, (bet, drawnNumber) => bet === drawnNumber));