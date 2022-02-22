/* exported difference */

/* first we create a function that holds 2 parameters
function difference (first, second) {
  then we create an empty array
  const newArray = [];
  then we loop over the first array
  for(let i = 0; i < first.length; i++) {
    we create a conditional that check if the values in first array at i is not equal to the values in the second array at i
    then we push it into the newArray
    if(second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  then we create another for loop to loop over the second array
  for(let j = 0; j < second.length; j++) {
    we create a conditional that check if the indexOf first is in the second at j if its not then indexOf will give us a value of - 1
    so then we check if its equal to -1 and if it is then we push it into the newArray
    if(first.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
*/

function difference(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
