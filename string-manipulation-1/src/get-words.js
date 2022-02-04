/* exported getWords */

/* first we create a function
then we split the string into an array and assign its value to a new variable
then we create a conditional that checks if the string is an empty string then return an empty array
otherwise we just return the new string */

function getWords(string) {
  const newString = string.split(' ');
  if (string === '') {
    return [];
  }
  return newString;
}
