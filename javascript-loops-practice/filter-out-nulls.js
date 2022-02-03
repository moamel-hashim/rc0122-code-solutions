/* exported filterOutNulls */

/* first we create a function with one parameter

function filterOutNulls(values) {
  the we create an empty array to hold the new values
  const array = [];
  the we create a for loop that loops over the array.length
  for(let i = 0; i < values.length; i++) {
    then we create a conditional that checks if the values are not equal to null then we push the values into the array
    if(values[i] !== null) {
      array.push(values[i]);
    }
  }
  return array;
}
*/

function filterOutNulls(values) {
  const array = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      array.push(values[i]);
    }
  }
  return array;
}
