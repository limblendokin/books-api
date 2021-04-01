const express = require('express');
const router = express.Router();
module.exports = (booksServiceInstance) => {
  router.post('/', (req, res) => {
    booksServiceInstance
      .create(req.body.book)
      .then((book) => res.send({ message: 'book created', book }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });

  router.post('/lend', (req, res) => {
    booksServiceInstance
      .lend(req.body.book.id, req.body.user.id)
      .then((book) => res.send({ message: 'book lent', book }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });
  router.post('/return', (req, res) => {
    booksServiceInstance
      .return(req.body.book.id, req.body.user.id)
      .then((book) => res.send({ message: 'book returned', book }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });
  return router;
};
