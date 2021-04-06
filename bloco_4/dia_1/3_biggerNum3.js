let num1 = 2;
let num2 = 60;
let num3 = 60;
let typeNum1 = typeof num1;
let typeNum2 = typeof num2;
let typeNum3 = typeof num3;
let biggerNum = null;
let equalNums = false;

if (typeNum1 == 'number' && typeNum2 == 'number' && typeNum3 == 'number') {  
  
  if (num1 > num2) {
    if (num1 > num3) {
      biggerNum = num1;
    } else {
      biggerNum = num3;
    }
  } else if (num2 > num3) {
    biggerNum = num2;
  } else if (num1 == num2 && num2 == num3){
    equalNums = true;
  } else {
    biggerNum = num3;
  }

  if (equalNums) {
    console.log('They are all equal.');
  } else {
    console.log(biggerNum, 'is bigger.');
  }

} else {
  console.log('ERROR: Invalid input!');
}