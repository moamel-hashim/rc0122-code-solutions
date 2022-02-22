/* exported zip */

/* first we create a function that holds 2 parameters
function zip(first, second) {
  step 1 we create a variable that holds an empty array
  const myArray = [];
  step 2 create a variable that holds another empty array
  let newArray = [];
  step 3 create a condition that checks if the first array is larger then the second array
  if it is then we remove the last element from that array
  if(first.length > second.length) {
    first.splice(first.length - 1, 1);
  }
  create a for loop to loop over the first array
  for(let i = 0; i < first.length; i++) {
      step 4 we push first at i into the new array
      newArray.push(first[i]);
      step 5 we push the second at i into the new array
      newArray.push(second[i]);
      step 6 we push the newArray into myArray
      myArray.push(newArray);
      step 7 we reset the newArray back into an empty array
      newArray = [];
    }
  }
  return newArray
}

*/

function zip(first, second) {
  const myArray = [];
  let newArray = [];
  if (first.length > second.length) {
    first.splice(first.length - 1, 1);
  }
  for (let i = 0; i < first.length; i++) {
    newArray.push(first[i]);
    newArray.push(second[i]);
    myArray.push(newArray);
    newArray = [];
  }
  return myArray;
}
