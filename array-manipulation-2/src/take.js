/* exported take */

/* first we need to create a function with 2 parameters
function take(array, count) {
  then we create a variable that holds a copy of the array with the new values of the array by using the slice method and giving it count as its argument
  const myArray = array.slice(0, count);
  return myArray;
}
*/

function take(array, count) {
  const myArray = array.slice(0, count);
  return myArray;
}
