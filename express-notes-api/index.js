const fs = require('fs');
const express = require('express');
const data = require('./data.json');
const app = express();
app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const keys in data.notes) {
    array.push(data.notes[keys]);
  }
  res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const number = Number(req.params.id);
  if (number < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!number) {
    res.status(404).json({ error: 'Invalid id' });
  } else {
    res.status(200).json(data.notes[number]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
  }
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    } else {
      res.status(201).json(req.body);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id is not a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: 'Invalid id' });
  } else {
    delete data.notes[id];
  }
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || !req.body.content) {
    res.status(400).json({ error: 'id is not a positive integer or there is no content' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    data.notes[id] = req.body;
  }
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    } else {
      res.status(200).json(data.notes);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('I\'m listening on port 3000');
});
