/* exported compact */

/* create a function that holds an array as a parameter
create a variable that holds an empty array
create a for loop to loop over the array length
create a conditional that checks if the values that are being passed through the array[i] is true
if it is then push the values into the empty array */

function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
