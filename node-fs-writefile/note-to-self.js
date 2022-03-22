
const data = process.argv[2];
const fs = require('fs');
fs.writeFile('./note.txt', `${data}\n`, err => {
  if (err) throw err;
});
