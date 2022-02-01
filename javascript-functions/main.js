function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  return `Hey ${name}`;
}

console.log('value of greet:', greet('moamel'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('value of getArea:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('value of getFirstName:', getFirstName({ firstName: 'moamel', lastName: 'hashim' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log('value of getLastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
