/* exported intersection */

/* first we create a function that holds 2 parameters
function intersection(first,second) {
  step 1 create an empty array
  const newArray = [];
  step 2 create a for loop to loop over the first array
  for(let i = 0; i < first.length; i++) {
    step 3 create conditional that check if indexOf second with the argument of first at i is not equal to - 1 if it not then we push
    the values into the newArray
    if(second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray
}
*/

function intersection(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
