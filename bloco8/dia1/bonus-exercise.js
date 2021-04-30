// Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDamage = () => getRandomIntInclusive(15, dragon.strength);

const getWarriorDamage = () => {
  return getRandomIntInclusive(warrior.strength, warrior.strength * warrior.weaponDmg);
};

const getMageInfo = () => {
  let damage = 'Não possui mana suficiente';
  let manaConsumed = 0;

  if (mage.mana >= 15) {
    damage = getRandomIntInclusive(mage.intelligence, mage.intelligence * 2);
    manaConsumed = 15;
  }

  return { damage, manaConsumed };
};

const gameActions = {
  warriorTurn: (warriorDamageCallback) => {
    const warriorDamage = warriorDamageCallback();

    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
};

console.log(getMageInfo());