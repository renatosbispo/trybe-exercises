// b = BASE
// l = LINE
// -----------
// b = 3 -> 2l
// b = 5 -> 3l
// b = 7 -> 4l
// b = 9 -> 5l
// -----------
// b = 2*l - 1
// l = (b + 1) / 2
// -----------
let n = 5;
let index1;
let index2;
let index3;
let line = '';
let previousLine = '';
let baseLine = '';
let border = '*';

if (n % 2 == 0) {
  console.log('Choose an odd number for the base of the pyramid.');
} else {
  // Build and print lines except for the base line
  for (index1 = 0; index1 < (n + 1) / 2 - 1; index1 += 1) {
    let spacesBefore = '';
    let lineOfSpaces = '';
    for (index2 = index1; index2 < (n - 1) / 2; index2 += 1) {
      spacesBefore += ' ';
    }
    if (index1 == 0) {
      line = border;
    } else {  
      for (index3 = 0; index3 < previousLine.length; index3++) {
        lineOfSpaces += ' ';
      }
      line = border + lineOfSpaces + border;
    }
    console.log(spacesBefore + line);
    previousLine = line;
  }
  // Build and print the base line
  for (index3 = 0; index3 < n; index3++) {
    baseLine += border;
  }
  console.log(baseLine);
}