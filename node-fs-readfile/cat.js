
const allFiles = ['cunningham.txt', 'dijkstra.txt', 'hopper.txt'];
const fs = require('fs');
for (let i = 0; i < allFiles.length; i++) {
  fs.readFile(allFiles[i], 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
