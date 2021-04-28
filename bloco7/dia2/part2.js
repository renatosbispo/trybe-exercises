const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercise 1
const addLessonInfo = (lesson, infoKey, infoValue) => {
  lesson[infoKey] = infoValue;
};
addLessonInfo(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Exercise 2
const printKeys = (object) => {
  Object.keys(object).forEach(key => console.log(key));
};
printKeys(lesson3);

// Exercise 3
const getObjectSize = (object) => {
  return Object.keys(object).length;
};
console.log(getObjectSize(lesson1));