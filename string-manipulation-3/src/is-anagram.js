/* exported isAnagram */

/* first we create a function with 2 parameters
function isAnagram(firstString, secondString) {
  create a variable that holds the values of firstString sorted
  sortFirstString = firstString.split('').sort().join('').trim();
  create another variable that holds the second string and sorts it
  sortSecondString = firstString.split('').sort().join('').trim();
  the we create a conditional that check if sortFirstString is equal to sortSecondString
  if(sortFirstString === sortSecondString) {
    return true
  }
  return false
}

*/

function isAnagram(firstString, secondString) {
  const sortFirstString = firstString.split('').sort().join('').trim();
  const sortSecondString = secondString.split('').sort().join('').trim();
  if (sortFirstString === sortSecondString) {
    return true;
  }
  return false;
}
