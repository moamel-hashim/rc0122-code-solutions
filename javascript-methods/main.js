
var numberOne = 1;
var numberTwo = 2;
var numberThree = 3;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('the value of maximumValue:', maximumValue);

var heros = ['Iron-man', 'Spider-man', 'Black panther', 'Thor'];

var randomNumber = Math.random() * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('the value of randomIndex:', randomIndex);

var randomHero = heros[randomIndex];
console.log('the value of randomHer:', randomHero);

var library = [{
  title: 'hi its me',
  author: 'Moamel Hashim'
},
{
  title: 'your boy',
  author: 'Moamel Hashim'
},
{
  title: 'cook book',
  author: 'Moamel Hashim'
}
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('the value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('the value of library:', library);

var fullName = 'Moamel Hashim';

var firstAndLastName = fullName.split(' ');
console.log('the value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('the value of sayMyName:', sayMyName);
