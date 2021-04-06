let percentGrade = 75;
let letterGrade;
let validGrade = true;

if (percentGrade < 0 || percentGrade > 100) { 
  validGrade = false;
} else if (percentGrade >= 90) {
  letterGrade = 'A';
} else if (percentGrade >= 80) {
  letterGrade = 'B';
} else if (percentGrade >= 70) {
  letterGrade = 'C';
} else if (percentGrade >= 60) {
  letterGrade = 'D';
} else if (percentGrade >= 50) {
  letterGrade = 'E';
} else {
  letterGrade = 'F'
}

if (validGrade) {
  console.log('Grade', letterGrade);
} else {
  console.log('ERROR: Invalid grade. Enter a number between 0 and 100.');
}