/* exported takeRight */

/* create a function with 2 parameter

function takeRight(array, count) {
  then create a variable that holds a copy of the array by using the slice method and giving it one argument -count so that it loops backwards
  const myArray = array.slice(0, count);
  return myArray;
}
*/

function takeRight(array, count) {
  const myArray = array.slice(-count);
  return myArray;
}
