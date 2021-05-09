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
  let mageDamage = 'Não possui mana suficiente';
  let manaConsumed = 0;

  if (mage.mana >= 15) {
    mageDamage = getRandomIntInclusive(mage.intelligence, mage.intelligence * 2);
    manaConsumed = 15;
  }

  return { mageDamage, manaConsumed };
};

const gameActions = {
  warriorTurn: (warriorDamageCallback) => {
    const warriorDamage = warriorDamageCallback();

    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageInfoCallback) => {
    const { mageDamage, manaConsumed } = mageInfoCallback();

    if (manaConsumed) {
      dragon.healthPoints -= mageDamage;
      mage.damage = mageDamage;
      mage.mana -= 15;
    } else mage.damage = 0;
  },
  dragonTurn: (dragonDamageCallback) => {
    const dragonDamage = dragonDamageCallback();

    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  getTurnResults: (turn) => {
    console.log(`[TURN ${turn}]`);
    console.log(battleMembers);
    console.log('===================================');
  },
};


gameActions.getTurnResults(0);

gameActions.warriorTurn(getWarriorDamage);
gameActions.mageTurn(getMageInfo);
gameActions.dragonTurn(getDragonDamage);

gameActions.getTurnResults(1);
  