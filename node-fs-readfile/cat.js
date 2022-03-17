process.argv.splice(0, 2);
const allFiles = process.argv;
const fs = require('fs');
for (let i = 0; i < allFiles.length; i++) {
  fs.readFile(allFiles[i], 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
