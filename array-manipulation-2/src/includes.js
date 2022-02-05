/* exported includes */
/* create a function that takes 2 parameters
function includes(array, value) {
  then create a for loop that loops over the array
  for (let i = 0; i < array.length; i++) {
    create a conditional that check if the values of the array at i is equal to the values that are giving
    if(array[i] === value) {
      return true
    }
  }
  return false
}
*/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
