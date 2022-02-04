/* exported lastChars */

/* first create a function that holds 2 parameters
function lastChars(length, string) {
  create a variable that holds the new values of the string after using the substr method on it and turning the values of length into negative values so that
  subtr loops backwords
  const myString = string.substr(0, -length);
  return myString;
}
*/

function lastChars(length, string) {
  const myString = string.substr(-length);
  return myString;
}
