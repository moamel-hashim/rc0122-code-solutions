
const note = process.argv[2];
const fs = require('fs');
fs.readFile(note, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(process.argv[3], `${data}\n`, err => {
    if (err) throw err;
  });
});
