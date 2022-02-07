/* exported omit */

/* first we need to create a function that takes 2 parameters
function omit(source, keys) {
  then we create a variable thats an empty object
  const object = {};
  then we create a for loop to loop over the array
  for(let i = 0; i < keys .length; i++) {
    then we create a for in loop that loops over the source object
    for(const key in source) {
      then we create a conditional that checks keys[i] is not equal to key then we assign it to the object
      if(!keys.includes(key)) {
        object[key] = source[key]
      }
    }
  }
  return object;
}

*/

function omit(source, keys) {
  const object = {};
  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (!keys.includes(key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
}
