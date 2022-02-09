/* exported invert */

/* create a function that holds one parameter
create a new object
create a for in loop to loop over the source object
then assign keys to the object at source at keys
lastly return the object
function invert(source) {
  const object = {};
  for (const keys in source) {
    object[source[keys]] = keys;
  }
  return object;
}
*/

function invert(source) {
  const object = {};

  for (const keys in source) {
    object[source[keys]] = keys;
  }
  return object;
}
