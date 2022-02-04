/* exported addSuffixToAll */

/* step 1 create a function addSuffixToAll with 2 parameters word and suffix

function addSuffixToAll(words, suffix) {
  step 1 create a variable that holds an empty Array
  const array = [];
  step 2 we loop over the words array
  for(let i = 0; i < words.length; i++) {
    then we assign words[i] to the empty array
    emptyString = words[i] + suffix
  }
  return array;
}
*/

function addSuffixToAll(words, suffix) {
  const array = [];
  for (let i = 0; i < words.length; i++) {
    array.push(words[i] + suffix);
  }
  return array;
}
