/* exported chunk */

/* step 1 create a function that holds 2 parameters
function chunk(array, size) {
  create a variable that holds an empty array;
  const myArray = [];
  then create another variable that holds another empty array
  const insideArray = [];
  then create a for loop that loops over the array length and push it into the insideArray
  for(let i = 0; i < array.length; i++) {
    insideArray.push(array[i]);
    create a conditional that check if the insideArray length is equal to size or if i is equal to the last index of the array length
    if(insideArray.length === size || i === array.length) {
      myArray.push(insideArray);
      insideArray = [];
    }
  }
  return myArray;
}
*/

function chunk(array, size) {
  const myArray = [];
  let insideArray = [];
  for (let i = 0; i < array.length; i++) {
    insideArray.push(array[i]);
    if (insideArray.length === size || i === array.length - 1) {
      myArray.push(insideArray);
      insideArray = [];
    }
  }
  return myArray;
}
