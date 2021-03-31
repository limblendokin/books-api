const express = require('express');
const app = express();
app.use(express.json());
const DAO = require('./repositories/DataAccessObject');
const db = DAO('./db/books.db');
const usersRepository = require('./repositories/usersRepository')(db);
const booksRepository = require('./repositories/usersRepository')(db);
const subscriptionsRepository = require('./repositories/usersRepository')(db);
process.on('SIGINT', function () {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
    process.exit();
  });
});
