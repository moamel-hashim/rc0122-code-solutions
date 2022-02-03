/* exported getIndexes */

/* we need to get indexes of values in the array and to do that we need to loop through the array and return the value of i

step 1 create a function getIndex (array)
function getIndex(array) {
  step 2 create an empty array that holds the values of i
  indexOfArray = [];
  step 3 we loop over the array length and we push i into the indexOfArray
  for(let i = 0; i < array.length; i++) {
    indexOfArray.push(i);
  }
  return indexOfArray;
}
*/

function getIndexes(array) {
  const indexOfArray = [];
  for (let i = 0; i < array.length; i++) {
    indexOfArray.push(i);
  }
  return indexOfArray;
}
