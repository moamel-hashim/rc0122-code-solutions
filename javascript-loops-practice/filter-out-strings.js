/* exported filterOutStrings */

/*
step 1 create a function that holds an array as a parameter
function filterOutStrings(values) {
  step 2 we create an empty array
  const array = [];
  step 3 we loop over the values array
  for(let i = 0; i < values.length; i++) {
    if(typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}
*/

function filterOutStrings(values) {
  const array = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}
