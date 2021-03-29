let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercise 1
console.log('Bem vindo(a),', info.personagem + '!');
console.log('======================')

// Exercise 2
info['recorrente'] = 'Sim';
console.log(info);
console.log('======================')

// Execise 3
for (let key in info) {
  console.log(key);
}
console.log('======================')

// Execise 4
for (let key in info) {
  console.log(info[key]);
}
console.log('======================')

// Exercise 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (key != 'recorrente') {
    console.log(info[key], 'e', info2[key]);
  } else {
    if (info.recorrente == 'Sim' && info2.recorrente == 'Sim') {
      console.log('Ambos recorrentes');
    }
  }
}
console.log('======================')