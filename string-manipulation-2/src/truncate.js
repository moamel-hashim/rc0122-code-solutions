/* exported truncate */

/* create a function with two parameters first is length and the second is a string
create a new variable that holds the new string
use the method substr on the string and pass 0 as the starting index and the length for the ending
return the new variable plus ...
*/

function truncate(length, string) {
  const subString = string.substr(0, length);
  return `${subString}...`;
}
