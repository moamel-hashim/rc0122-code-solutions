const data = Math.random().toString();
const fs = require('fs');
fs.writeFile('./random.txt', `${data}\n`, err => {
  if (err) throw err;
});
