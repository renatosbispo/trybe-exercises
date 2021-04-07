const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// Get random number between 0 and 1, including both.
function inclusiveRandom() {
  return Math.ceil(Math.random() * 1000000000000) / 1000000000000;
}

// Get random integer between min and max, including both.
// Adapted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  return Math.floor(inclusiveRandom() * (max - min) + min);
}

/*
 * Crie uma função que adicione a classe 'tech' ao elemento selecionado.
 * 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 */
function toggleTechClass(event) {
  let element = event.target;
  let element2 = document.querySelector('.tech');

  if (element2) {
    element2.classList.remove('tech');
  }

  if (element !== element2) {
    element.classList.add('tech');
  }
}
let boxes = document.querySelector('.container').children;

for (let box of boxes) {
  box.addEventListener('click', toggleTechClass);
}

/*
 * Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
 * com a classe 'tech'.
 */
function changeTechText(event) {
  let techElement = document.querySelector('.tech');

  techElement.innerText = event.target.value;
}

document.getElementById('input').addEventListener('keyup', changeTechText);

/*
 * Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
 * ele redirecione para alguma página.
 * 1. Que tal redirecionar para seu portifólio?
 */
let top3 = document.getElementById('mySpotrybefy');
top3.addEventListener('dblclick', () => window.open('https://renatosbispo.github.io', '_blank'));

/*
 * Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
 * a cor do mesmo;
 */
top3.addEventListener('mouseover', event => event.target.style.color = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`);
top3.addEventListener('mouseleave', event => event.target.style.color = null);

// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.