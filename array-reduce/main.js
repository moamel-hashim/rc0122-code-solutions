const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumAll = numbers.reduce((previousNum, currentNum) => previousNum + currentNum);
console.log(sumAll);

const product = numbers.reduce((previousNum, currentNum) => previousNum * currentNum);
console.log(product);

const start = 0;

const balance = account.reduce((total, transaction) => {
  if (transaction.type === 'deposit') {
    return total + transaction.amount;
  } else {
    return total - transaction.amount;
  }
}, start);
console.log(balance);

const object = {};

const composite = traits.reduce((pokemon, stats) => {
  return Object.assign(pokemon, stats);
}, object);

console.log(composite);
