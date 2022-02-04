/* exported sumAll */

/* first we create a function thats called sumAll with one parameter(numbers) which is an array

function sumAll(numbers) {
  then we create a total variable that adds all the numbers in the array through the looping
  let total = 0
  then we create a for loop that loops over the array length and add 1 to i
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total
}
*/

function sumAll(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
