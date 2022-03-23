const fs = require('fs');
const index = 2;
const allFiles = process.argv;
handleFiles(index);
function handleFiles(index) {
  const fileIndex = allFiles[index];
  if (index === process.argv.length) {
    return;
  }
  fs.readFile(fileIndex, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    index++;
    return handleFiles(index);
  });
}
