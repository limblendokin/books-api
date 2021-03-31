const express = require('express');
const app = express();

app.get('./api/users/all', (req, res) => {
  usersService
    .getAll(req.body.user)
    .then((users) => res.send(users))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});

app.get('./api/users/', (req, res) => {
  usersService
    .getById(req.body.id)
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});

app.post('./api/users/', (req, res) => {
  usersService
    .create(req.body.user)
    .then((user) => res.send({ message: 'user created', user }))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});

app.put('./api/users/', (req, res) => {
  usersService
    .update(req.body.user)
    .then((user) => res.send({ message: 'user updated', user }))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});

app.delete('./api/users/', (req, res) => {
  usersService
    .delete(req.body.id)
    .then((user) => res.send({ message: 'user updated', user }))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});

app.post('./api/subscriptions/', (req, res) => {
  subscriptionsService
    .create(req.body.id)
    .then((user) => res.send({ message: 'user updated', user }))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});

app.post('./api/books/', (req, res) => {
  booksService
    .create(req.body.book)
    .then((book) => res.send({ message: 'book created', book }))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});

app.post('./api/books/borrow', (req, res) => {
  booksService
    .borrow(req.body.book.id, req.body.user.id)
    .then((book) => res.send({ message: 'book borrowed', book }))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});
app.post('./api/books/return', (req, res) => {
  booksService
    .return(req.body.book.id, req.body.user.id)
    .then((book) => res.send({ message: 'book returned', book }))
    .catch((err) => {
      console.log(err);
      res.send({ err: true, message: 'error occured' });
    });
});
