/* exported union */

function union(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (let j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
