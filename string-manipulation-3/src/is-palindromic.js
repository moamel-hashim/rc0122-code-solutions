/* exported isPalindromic */

/* first we create a function that holds one parameter
then we create a variable that holds an empty string
create another variable that holds another empty string
create a for loop to loop over the string length then assign it to the empty string
then we split the string and join it to remove any spaces in the string and reassign it to the original variable
then we create another for loop to loop over the string backwards
then we assign the string at j to the empty string
after that we split the string and join it together to get rid of the empty space
then we create a conditional that checks if the newString is equal to the reversedString
if it is then return true if its not then return false.

function isPalindromic(string) {
  let newString = '';
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    newString += string[i];
  }
  newString = newString.split(' ').join('');
  for (let j = string.length - 1; j >= 0; j--) {
    reversedString += string[j];
  }
  reversedString = reversedString.split(' ').join('');
  if (newString === reversedString) {
    return true;
  }
  return false;
}
*/

function isPalindromic(string) {
  let newString = '';
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    newString += string[i];
  }
  newString = newString.split(' ').join('');
  for (let j = string.length - 1; j >= 0; j--) {
    reversedString += string[j];
  }
  reversedString = reversedString.split(' ').join('');
  if (newString === reversedString) {
    return true;
  }
  return false;
}
