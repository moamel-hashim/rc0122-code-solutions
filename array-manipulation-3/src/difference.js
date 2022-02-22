/* exported difference */

/* first we create a function that holds 2 parameters
function difference (first, second) {
  then we create an empty array
  const newArray = [];
  then we loop over the first array
  for(let i = 0; i < first.length; i++) {
    we create a conditional that check if the values in first array at i is not equal to the values in the second array at i
    then we push it into the newArray
    if(first[i] !== second[i]) {
      newArray.push(first[i]);
      newArray.push(second[i]);
    }
  }
  return newArray;
}
*/

function difference(first, second) {
  const newArray = [];
  const anotherArray = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      newArray.push(first[i]);
      anotherArray.push(second[i]);
    }
  }
  const fullArray = newArray.concat(anotherArray);
  return fullArray;
}
