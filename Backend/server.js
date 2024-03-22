const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/*const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pwd@1234',
  database: 'cloudclickerdb'
});*/
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/counter', (req, res) => {
  db.query('SELECT value FROM counter WHERE id = 1', (err, result) => {
    if (err) throw err;
    res.send({ count: result[0].value });
  });
});

app.post('/increment', (req, res) => {
  db.query('UPDATE counter SET value = value + 1 WHERE id = 1', (err, result) => {
    if (err) throw err;
    db.query('SELECT value FROM counter WHERE id = 1', (err, result) => {
      if (err) throw err;
      res.send({ count: result[0].value });
    });
  });
});

app.listen(port, () => {
  console.log(`Counter app listening at http://localhost:${port}`);
});
