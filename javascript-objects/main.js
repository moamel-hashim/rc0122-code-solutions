var student = {
  firstName: 'moamel',
  lastName: 'hashim',
  age: 24
};

var fullName = `${student.firstName} ${student.lastName}`;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'drone pilot';

console.log('value of liveInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'honda',
  model: 'civic',
  year: 2014
};

vehicle['color'] = 'black';

vehicle['isConvertible'] = true;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'cookie',
  type: 'terrier mix'
};

delete pet.name;
delete pet['type'];

console.log('value of pet:', pet);
