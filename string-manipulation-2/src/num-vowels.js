/* exported numVowels */

/* first we need to create a variable that keeps track of the total
then we need to loop over the string
after that we need to create a conditional that checks if the string at i is a vowel and if its then increment the total by one for each vowel that we fined
then we return the total

function numVowels(string) {
  let total = 0;
  for(let i = 0; i < string.length; i++) {
    if(/AEIOUaeiou/.test(string[i])) {
      total++;
    }
  }
  return total;
}
*/

function numVowels(string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    if (/[AEIOUaeiou]/.test(string[i])) {
      total++;
    }
  }
  return total;
}
