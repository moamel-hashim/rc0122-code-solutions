/* exported isVowel */
/* first we create a function that checks if the characters that are passed through it are vowels or not
we can create a conditional that checks if the char is AEIOU or aeiou then return a boolean or we can use the regexr.test method and pass character as its argument to check if a
vowel is a match the default value of the test method is a boolean */

function isVowel(character) {
  return /[AEIOU, aeiou]/.test(character);
}
