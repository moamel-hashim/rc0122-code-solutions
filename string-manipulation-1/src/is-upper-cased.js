/* exported isUpperCased */

/* we create a function that checks if the parameter is upper cased or not if it is then return true if its not the return false.
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
