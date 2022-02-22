/* exported unique */
/* first we create a function that holds one parameter
function unique(array) {
  step 2 we create an empty array
  const newArray = [];
  step 3 then we create a for loop to loop over the array
  for(let i = 0; i < array.length; i++) {
    step 4 we check if the newArray doesnt contain the values of array at i and if it doesnt then we push into the newArray
    if(newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray
}
*/

function unique(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
