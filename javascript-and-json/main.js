var array = [
  {
    isbn: '12231231334',
    titel: 'the who',
    author: 'is me your boi'
  },
  {
    isbn: '993204232134',
    title: 'sheeeeeesh',
    author: 'is me your boi'
  },
  {
    isbn: '38293435',
    title: 'hands are sweaty',
    author: "mom's spaghetti"
  }
];

console.log('type of array:', typeof array);
console.log('JSON string:', typeof JSON.stringify(array));

var json = '{"id" : 11221, "name" : "moamel"}';
console.log(typeof json);
var obj = JSON.parse(json);
console.log(obj);
