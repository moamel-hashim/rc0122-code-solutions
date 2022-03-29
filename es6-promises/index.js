const takeAChance = require('./take-a-chance');
const chances = takeAChance('moamel');
chances.then(value => {
  console.log(value);
});
chances.catch(error => {
  console.error(error.message);
});
