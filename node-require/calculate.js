const num1 = parseFloat(process.argv[2]);
const operator = process.argv[3];
const num2 = parseFloat(process.argv[4]);
const add = require('./add');
console.log('results:', add);
const subtract = require('./subtract');
console.log('results:', subtract);
const multiply = require('./multiply');
console.log('results:', multiply);
const divide = require('./divide');
console.log('results:', divide);
if (operator === 'plus') {
  console.log('results:', add(num1, num2));
} else if (operator === 'minus') {
  console.log('results:', subtract(num1, num2));
} else if (operator === 'times') {
  console.log('results:', multiply(num1, num2));
} else if (operator === 'over') {
  console.log(divide(num1, num2));
}
