const express = require('express');
const dao = require('./repositories/DataAccessObject');
const BooksService = require('./services/booksService');
const BooksRepository = require('./repositories/booksRepository');
const UsersService = require('./services/usersService');
const UsersRepository = require('./repositories/usersRepository');
const app = express();
app.use(express.json());
const booksRepositoryInstance = new BooksRepository(dao);
const usersRepositoryInstance = new UsersRepository(dao);
const booksServiceInstance = new BooksService(
  booksRepositoryInstance,
  usersRepositoryInstance
);
const usersServiceInstance = new UsersService(
  booksRepositoryInstance,
  usersRepositoryInstance
);
usersRepositoryInstance.createTable().then(() => {
  booksRepositoryInstance.createTable();
});
const routes = require('./controllers');
routes(app, booksServiceInstance, usersServiceInstance);
process.on('SIGINT', function () {
  dao
    .close()
    .then(() => {
      process.exit();
    })
    .catch((err) => process.exit());
});
app.listen(5000);
