/* exported flatten */

/* first we create a function with one parameter
function flatten(array) {
  step 1 create a variable that holds an empty array
  const newArray = [];
  then we loop over the array
  for (let i = 0; i < array.length; i++) {
    then we create a conditional to check if the array at i is an array or not if its not then we push the values to the new array
    if(!Array.isArray(array[i])) {
      array.push(array[i]);
    } else {
      in the else statement we loop over the array[i] and then push the values into the new array
      for(let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
}
*/

function flatten(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
}
