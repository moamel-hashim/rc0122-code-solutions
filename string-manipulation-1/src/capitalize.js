/* exported capitalize */

/* fist we create a function that holds one parameter
then we create a new variable that holds the values of the string lower cased
then we slice the lower cased word starting from the first index
then we assign the return value to a new variable
after that we capitalize the first letter of the word and add the rest of the word together then we assign it to a new variable
finally we return the variable that holds the first letter upperCased
*/

function capitalize(word) {
  const lowerCased = word.toLowerCase();
  const restOfWord = lowerCased.slice(1, lowerCased.length);
  const firstLetterUpperCased = lowerCased[0].toUpperCase() + restOfWord;
  return firstLetterUpperCased;
}
