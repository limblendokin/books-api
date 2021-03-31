const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
app.use(express.json());
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/chinook.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
process.on('SIGINT', function () {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
    process.exit();
  });
});
