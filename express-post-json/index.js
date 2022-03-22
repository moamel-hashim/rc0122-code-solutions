const express = require('express');
const app = express();
let nextId = 1;

const grades = {

};

app.get('/api/grades', (req, res) => {
  const array = [];
  array.push(grades[nextId]);
  res.json(array);
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  grades[nextId] = req.body;
  res.json(req.body);
  res.status(201);
});

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('I\'m listening');
});
