let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercise 1
console.log('Bem vindo(a),', info.personagem + '!');

// Exercise 2
info['recorrente'] = 'Sim';
console.log(info);

// Execise 3
for (let key in info) {
  console.log(key);
}

// Execise 4
for (let key in info) {
  console.log(info[key]);
}