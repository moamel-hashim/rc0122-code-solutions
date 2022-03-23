
const readAny = process.argv[2];
const fs = require('fs');
fs.readFile(readAny, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
