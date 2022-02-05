/* exported capitalizeWord */

/* create a function capitalizeWord with one parameter word
function capitalizeWord(word) {
  create a new variable that lower case the string
  const lowerCased = word.toLowerCase();
  extract the letters beside the first letter
  restOfWord = lowerCased.slice(1);
  capitalize the first letter of the word and add the rest of the word to it
  const firstLetterUpperCased = lowerCased[0].toUpperCase() + restOfWord;
  create a condition that check if the word is lowerCased javascript if it is then return the string JavaScript
  if(lowerCased === 'javascript') {
    return 'JavaScript';
  }
  return firstLetterUpperCased;
}
*/

function capitalizeWord(word) {
  const lowerCased = word.toLowerCase();
  const restOfWord = lowerCased.slice(1);
  const firstLetterUpperCased = lowerCased[0].toUpperCase() + restOfWord;
  if (lowerCased === 'javascript') {
    return 'JavaScript';
  }
  return firstLetterUpperCased;
}
