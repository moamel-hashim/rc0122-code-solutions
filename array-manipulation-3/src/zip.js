/* exported zip */

/* first we create a function that holds 2 parameters
function zip(first, second) {
  step 1 create a variable that holds an empty
  let newArray = [];
  create a for loop to loop over the first array
  for(let i = 0; i < first.length; i++) {
    for(let j = 0; j < second.length; j++) {
      newArray.push(first[i] + second[j]);
      newArray = []
    }
  }
  return newArray
}

*/

function zip(first, second) {
  const myArray = [];
  let newArray = [];
  for (let i = 0; i < first.length; i++) {
    newArray.push(first[i]);
    newArray.push(second[i]);
    if (first.length - 1 !== second.length - 1) {
      newArray.splice(i, 1);
    } else {
      myArray.push(newArray);
      newArray = [];

    }
  }
  return myArray;
}
