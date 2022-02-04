/* exported getValues */

/* create a function that holds object as a parameter
create an empty array
create a for in loop and loop over the object
push the keys values into the empty array
return the empty array
*/

function getValues(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
