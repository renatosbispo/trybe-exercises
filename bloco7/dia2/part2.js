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

// Exercise 2
const listObjectKeys = object => Object.keys(object);

// Exercise 3
const getObjectSize = (object) => {
  return Object.keys(object).length;
};

// Exercise 4
const getObjectValues = object => Object.values(object);

// Exercise 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Exercise 6
const getTotalStudents = (allLessons) => {
  return Object.values(allLessons).reduce((total, lesson) => total + lesson.numeroEstudantes, 0);
};

// Exercise 7
const getValueByIndex = (object, index) => {
  const objectKeys = Object.keys(object);
  const requestedKey = Object.keys(object)[index];

  return requestedKey ? object[requestedKey] : null;
}
