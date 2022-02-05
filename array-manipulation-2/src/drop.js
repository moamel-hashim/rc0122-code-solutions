/* exported drop */

/* first create a function that holds 2 parameters
function(array, count) {
  then create a variable that holds a copy of the new values of the array using the slice method and givin it count as an argument so that the loop would start from the count index
  const myArray = array.slice(count);
  return myArray;
}
*/

function drop(array, count) {
  const myArray = array.slice(count);
  return myArray;
}
