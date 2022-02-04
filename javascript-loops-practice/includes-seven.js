/* exported includesSeven */

/* step 1 create a function includesSeven with one parameter
function includesSeven(array) {
  step 2 create a for loop that loops over the array length
  for(let i = 0; i < array.length; i++) {
    the create a condition that checks if the number 7 is in the array or no {
      if (array[i] === 7) {
        return true
      } else
      return false
    }
  }
}
*/

function includesSeven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
