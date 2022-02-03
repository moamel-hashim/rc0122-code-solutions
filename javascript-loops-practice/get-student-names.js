/* exported getStudentNames */

/* step 1 we create a function with one parameter
function getStudentNames(students) {
  step 2 create an empty array
  const array = [];
  step 3 create a for in loop to loop over the object
  for(let keys in students) {
    step 4 we push students[keys] into the empty array
  }
  return array;
}
*/

function getStudentNames(students) {
  const array = [];
  for (const keys in students) {
    array.push(students[keys].name);
  }
  return array;
}
