/* exported capitalizeWords */

/* create a function with one parameter string
function capitalizeWords(string) {
  create a variable that holds the string lowerCased
  const lowerCased = string.toLowerCase();
  create a variable that holds an array of the lowerCased string
  const myArray = lowerCased.split(' ');
  create a for loop to loop over the array length then upper case the first letter of the string
  for(let i = 0; i < myArray.length; i++) {
    create a variable that stores the rest of the word
    const restOfWord = myArray[i].slice(1);
    then we need to select the first letter of myArray[i] then upperCase it after that add the restOfWord to it and assign the values back to myArray[i]
    myArray[i] = myArray[i].charAt(0).toUpperCase() + restOfWord;
  }
  return newArray.join('');
}

*/

function capitalizeWords(string) {
  const lowerCased = string.toLowerCase();
  const myArray = lowerCased.split(' ');
  for (let i = 0; i < myArray.length; i++) {
    const restOfWord = myArray[i].slice(1);
    myArray[i] = myArray[i].charAt(0).toUpperCase() + restOfWord;
  }
  return myArray.join(' ');
}
