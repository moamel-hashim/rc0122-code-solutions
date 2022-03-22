const express = require('express');
const app = express();

const grades =
{
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const keys in grades) {
    array.push(grades[keys]);
  }
  res.json(array);
});

app.delete('/api/grades/:id', (req, res) => {
  const { id } = req.params;
  if (!grades[id]) {
    res.sendStatus(404);
  } else {
    delete grades[id];
    res.sendStatus(204);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('I \'m listening on port 3000');
});
