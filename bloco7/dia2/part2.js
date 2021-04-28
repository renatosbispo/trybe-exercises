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

const addLessonInfo = (lesson, infoKey, infoValue) => {
  lesson[infoKey] = infoValue;
};

const printKeys = (object) => {
  Object.keys(object).forEach(key => console.log(key));
};

addLessonInfo(lesson2, 'turno', 'manhã');
console.log(lesson2);
printKeys(lesson3);
