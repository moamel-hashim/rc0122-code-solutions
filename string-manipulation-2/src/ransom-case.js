/* exported ransomCase */

/* create a function ransomCase that holds one parameter string
function ransomCase(string) {
  create a variable that lower case the string
  const lowerCased = string.toLowerCase();
  create a new variable that holds an empty string
  let emptyString = '';
  create a for loop that loops over the string length
  for(let i = 0; i < string.length; i++) {
    then we create a conditional that check if i is odd then we upperCase the letter if its even then we just add the letter
    if(i % 2 === 1) {
      emptyString += string[i].toUpperCase;
    } else if (i % 2 === 0) {
      emptyString += lowerCased[i]
    }
  }
  return emptyString
}
*/

function ransomCase(string) {
  const lowerCased = string.toLowerCase();
  let ransomString = '';
  for (let i = 0; i < lowerCased.length; i++) {
    if (i % 2 === 1) {
      ransomString += lowerCased[i].toUpperCase();
    } else if (i % 2 === 0) {
      ransomString += lowerCased[i];
    }
  }
  return ransomString;
}
