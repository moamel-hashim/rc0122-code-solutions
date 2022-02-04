/* exported reverse */

/* create a function that holds an array as a parameter
create a variable that holds a an empty array
create a for loop that starts at the last index of the array and stops at the first index
push the new values into the empty array
return the new array
*/

function reverse(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
