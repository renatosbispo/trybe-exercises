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
let line = '';

if (n % 2 == 0) {
  console.log('Choose an odd number for the base of the pyramid.');
} else {
  for (index1 = 1; index1 <= (n + 1) / 2; index1 += 1) {
    let spaces = ''; 
    for (index2 = n - index1; index2 > 0; index2 -= 1) {
      spaces += ' ';
    }
    if (index1 == 1) {
      line += '*'
    } else {
      line += '**';
    }
    console.log(spaces + line);
  }
}