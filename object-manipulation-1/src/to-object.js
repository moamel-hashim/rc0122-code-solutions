/* exported toObject */

/* create a function that holds a parameter keyValuePair
create an empty object
create a for loop and loop over the length of the array
then assign the keyValuePair at 1 to the empty object at 0
finally return the object
*/

function toObject(keyValuePair) {
  const object = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    object[keyValuePair[0]] = keyValuePair[1];
  }
  return object;
}
