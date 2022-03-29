const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use('/api/grades', express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"`;
  db.query(sql)
    .then(result => {
      const all = result.rows;
      res.status(200).json(all);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const gradesScore = Number(req.body.score);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'content is required' });
    return;
  }
  if (!Number.isInteger(gradesScore) || gradesScore < 0 || gradesScore > 100) {
    res.status(400).json({ error: 'score must be a positive integer between 0 to 100' });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *`;
  const params = [req.body.name, req.body.course, gradesScore];
  db.query(sql, params)
    .then(result => {
      const grades = result.rows[0];
      res.status(201).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const score = req.body.score;
  if (!Number.isInteger(gradeId) || Number.isNaN(gradeId) || gradeId < 0) {
    res.status(400).json({ error: `invalid ${gradeId} please enter a valid gradeId` });
    return;
  }
  if (!req.body.name || !req.body.course || !score) {
    res.status(400).json({ error: 'missing name, course or score' });
    return;
  }
  const sql = `update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
      where "gradeId" = ${gradeId}
      returning *`;
  const params = [req.body.name, req.body.course, score];
  db.query(sql, params)
    .then(result => {
      const grades = result.rows[0];
      if (!grades) {
        res.status(404).json({ error: 'invalid grades' });
      } else {
        res.json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || Number.isNaN(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'invalid gradeId please enter a valid gradeId' });
    return;
  }
  const sql = `delete from "grades"
    where "gradeId" = $1
    returning *`;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grades = result.rows[0];
      if (!grades) {
        res.status(404).json({ error: 'invalid grades' });
      } else {
        res.status(204).json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('listening on port 3000');
});
