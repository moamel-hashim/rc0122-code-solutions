/* exported dropRight */

/* first we create a function that takes 2 parameters
function dropRight(array, count) {
  then create a variable that holds an empty array
  const myArray = [];
  create a for loop to loop over the array length then subtract count from the array length
  for(let i = 0; i < array.length - count; i++) {
    array.push(array[i]);
  }
  return myArray;
}
*/

function dropRight(array, count) {
  const myArray = [];
  for (let i = 0; i < array.length - count; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
