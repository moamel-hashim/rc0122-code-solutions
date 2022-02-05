/* exported swapChars */

/* first we create a function that holds 3 parameters
function swapChars(firstIndex, secondIndex, string) {
  then we split the string and store it into a new variable
  const myArray = string.split('');
  create a new variable that holds the value of myArray[firstIndex]
  const firstLetter = myArray[firstIndex];
  create another variable that holds the values of myArray[secondIndex]
  const secondLetter = myArray[secondIndex]
  then we reassign the values of myArray[firstIndex] to be equal to the value of the variable firstLetter
  myArray[firstIndex] = firstLetter;
  we do the same thing for myArray[secondIndex]
  myArray[secondIndex] = secondLetter;
  finally we return the array
  return myArray.join('')
}
*/

function swapChars(firstIndex, secondIndex, string) {
  const myArray = string.split('');
  const firstLetter = myArray[firstIndex];
  const secondLetter = myArray[secondIndex];
  myArray[firstIndex] = secondLetter;
  myArray[secondIndex] = firstLetter;
  return myArray.join('');
}
