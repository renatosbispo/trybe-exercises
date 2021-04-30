const generateEmail = (fullName) => `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`;
const getNewEmployee = (fullName) => ({ fullName, email: generateEmail(fullName) });

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'),
    id2: action('Luiza Drumond'),
    id3: action('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(getNewEmployee));
