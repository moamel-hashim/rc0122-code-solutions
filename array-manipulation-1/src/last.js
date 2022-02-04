/* exported last */

/* create a function that first check if the parameter that is passed through is an empty array or not
and if it is then we return undefined if its not then we return the last element of the array */

function last(array) {
  if (!array) {
    return undefined;
  }
  return array[array.length - 1];
}
