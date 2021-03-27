const MAX_INSS_RATE = 570.88

let grossSalary = 2750;
let salaryAfterInss;
let netSalary;
let inssRate;
let irRate;
let irDeduction;
let maxInssRate = false;

// INSS brackets
if (grossSalary <= 1556.94) {
  inssRate =  0.08;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  inssRate =  0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  inssRate =  0.11;
} else {
  maxInssRate = true;
}

// Salary after INSS calculation
if (maxInssRate) {
  salaryAfterInss = grossSalary - MAX_INSS_RATE;
} else {
  salaryAfterInss = grossSalary * (1 - inssRate);
}

// IR brackets
if (salaryAfterInss <= 1903.98) {
  irRate = 0;
  irDeduction = 0;
} else if (salaryAfterInss >= 1903.99 && salaryAfterInss <= 2826.65) {
  irRate = 0.075;
  irDeduction = 142.80;
} else if (salaryAfterInss >= 2826.66 && salaryAfterInss <= 3751.05) {
  irRate = 0.15;
  irDeduction = 354.80;
} else if (salaryAfterInss >= 3751.06 && salaryAfterInss <= 4664.68) {
  irRate = 0.225;
  irDeduction = 636.13;
} else {
  irRate = 0.275;
  irDeduction = 869.36;
}

// Net salary calculation
netSalary = salaryAfterInss - (salaryAfterInss * irRate - irDeduction);
// Round to 2 decimal places
netSalary = Math.round(netSalary * 100) / 100;

console.log('Net salary =', netSalary);