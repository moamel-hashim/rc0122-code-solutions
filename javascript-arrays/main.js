var colors = ['white', 'red', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

console.log(`America is ${colors[1]}, ${colors[0]}, and ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[1]}, ${colors[0]}, and ${colors[2]}.`);

var student = ['moamel', 'jon', 'adrienne', 'blitz'];

var numberOfStudents = student.length;

console.log(`There are ${numberOfStudents} students in the class.`);

var lastIndex = numberOfStudents - 1;

var lastStudent = student[lastIndex];

console.log(`The last student in the array is ${lastStudent}`);

console.log('the value of student', student);
