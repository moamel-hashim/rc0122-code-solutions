/* exported findIndex */

function findIndex(array, value) {
  let indexOfValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexOfValue = i;
      break;
    } else if (array[i] !== value) {
      indexOfValue = -1;
    }
  }
  return indexOfValue;
}
