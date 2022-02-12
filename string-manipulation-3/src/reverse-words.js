/* exported reverseWords */

function reverseWords(string) {
  const stringToArray = string.split('');
  const myArray = [];
  for (let i = 0; i < string.length; i++) {
    myArray.unshift(stringToArray[i]);
  }
  return myArray.join('').split(' ').reverse().join(' ');
}
