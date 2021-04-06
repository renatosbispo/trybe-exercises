let angleA = 60;
let angleB = 60;
let angleC = 60;
let angleSum = angleA + angleB + angleC;

if (angleA > 0 && angleB > 0 && angleC > 0) {
  if (angleSum == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('ERROR: Enter only positive angles!');
}