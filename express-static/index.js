const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, 'public');
console.log('value of join:', join);
const files = express.static(join);
app.use(files);

app.listen(3000, () => {
  console.log('I\'m listening on port 3000');
});
