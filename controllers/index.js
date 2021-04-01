module.exports = (app, booksServiceInstance, usersServiceInstance) => {
  const UsersController = require('./usersController');
  const booksController = require('./booksController');
  app.use('/api/users', UsersController(usersServiceInstance));
  app.use('/api/books', booksController(booksServiceInstance));
};
