/* exported equal */
/* first we create a function the holds 2 parameters
function equal (first, second) {
  step 1 we need to check if the length of the first array is equal to the length of the second array
  if(first.length !== second.length) {
    return false;
  }
  then we need to loop over the first array and check if the first array at i is not equal to the second array at i
  then we return false if they are not equal
  for(let i = 0; i < first.length; i++) {
    if(first[i] !== second[i]) {
      return false;
    }
    step 3 we create another for loop that loops over the second array to check if first array at i is not equal to the second array at i then return false
    for(let j = 0; j < second.length; j++) {
      if(first[i] !== second[i]) {
        return false;
      }
    }
  }
  lastly we return true at the end of the function
  return true
}
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
    for (let j = 0; j < second.length; j++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
