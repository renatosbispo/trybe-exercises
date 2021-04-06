let n = 6;
let index1;
let index2;
let line = '';

for (index1 = 1; index1 <= n; index1 += 1) {
  let spaces = ''; 
  for (index2 = n - index1; index2 > 0; index2 -= 1) {
    spaces += ' ';
  }
  line += '*';
  console.log(spaces + line);
}