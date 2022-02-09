/* exported pick */

/* first we need to create a function that holds 2 parameters
function pick(source, keys) {
  then we create an empty object
  const object = {}
  then we loop over the array
  for (let i = 0; i < keys.length; i++) {
    then we need to loop in the source object
    for(const key in source) {
      then we create a conditional that check if keys[i] is equal to key then we push it into the empty object
      if(keys[i] === key) {
        object[key] = source[key];
      }
    }
  }
}
*/

function pick(source, keys) {
  const object = {};
  for (let i = 0; i < keys.length; i++) {
    for (const key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        object[key] = source[key];
      }
    }
  }
  return object;
}
