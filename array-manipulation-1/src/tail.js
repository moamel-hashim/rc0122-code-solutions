/* exported tail */

/* create a function that holds an array as a parameter
create a variable that holds an empty array
create a for loop that initializes at the first second index of the array length
push the values into the new array
finally return the new array
*/

function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
