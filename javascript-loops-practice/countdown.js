/* exported countdown */

/* step 1. create a function called count down with one parameter (number)
function countdown(number) {
  step 2. create a variable that holds an empty array
  countdownArray = [];
  step 3 create a for loop that initialize is the parameter number and its condition i is grater then number.length then the final expression is i--
  for(let i= number; i > 0; i--) {
    step 4 we push i to the countdownArray
    countdownArray.push(i);
  }
  return countdownArray;
}
*/

function countdown(number) {
  const countdownArray = [];
  for (let i = number; i >= 0; i--) {
    countdownArray.push(i);
  }
  return countdownArray;
}
