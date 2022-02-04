/* exported head */

/* create a function that check if the array that is passed through is not a truthy value if its then we return the first element inside that array
*/

function head(array) {
  if (!array) {
    return undefined;
  }
  return array[0];
}
