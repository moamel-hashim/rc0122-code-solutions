/* exported getKeys */

/* create a function that holds an object as a parameter
create an empty array
create a for in loop that loops in side the object
push key into the array
return the array
*/

function getKeys(object) {
  const array = [];
  for (const keys in object) {
    array.push(keys);
  }
  return array;
}
