/* exported initial */

/* create a function that holds array as a parameter
create a new variable that holds an empty array
create a for loop that starts at 0 and its conditional is array.length -1 so it stops before the last element
push the new values into the new variable
return the new variable */

function initial(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
