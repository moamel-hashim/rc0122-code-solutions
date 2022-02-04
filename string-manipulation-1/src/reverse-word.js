/* exported reverseWord */

/* step 1 create a function that that holds word as a parameter
function reverseWord(word) {
  step 2 create a new variable that holds the new word
  let newString = '';
  step 3 create a for loop that loops over the string backwords
  for (let i = word.length -1; i > 0; i--) {
    step 4 we reassign word[i] to the newString variable
    newString += word[i];
  }
  return newString;
}
*/

function reverseWord(word) {
  let newString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
