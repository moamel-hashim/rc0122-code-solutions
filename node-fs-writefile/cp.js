
const note = process.argv[2];
const fs = require('fs');
fs.readFile(note, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile('./reminder.txt', `${data}\n`, err => {
    if (err) throw err;
  });
});
