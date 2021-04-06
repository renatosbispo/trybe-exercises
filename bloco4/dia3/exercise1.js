let n = 5;
let index;
let line = '';

for (index = 0; index < n; index += 1) {
  line += '*';
}

for (let column of line) {
  console.log(line);
}