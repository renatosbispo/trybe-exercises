let num1 = 24;
let num2 = 42;
let biggerNum = null;
let equalNums = false;

if (typeof num1 == 'number' && typeof num2 == 'number') {  
  
  if (num1 > num2) {
    biggerNum = num1;
  } else if (num2 > num1) {
    biggerNum = num2;
  } else {
    equalNums = true;
  }

  if (equalNums) {
    console.log('They are equal.');
  } else {
    console.log(biggerNum, 'is bigger.');
  }

} else {
  console.log("ERROR: Invalid input!");
}