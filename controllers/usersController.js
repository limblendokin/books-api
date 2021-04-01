const userDTO = require('./userDTO');
module.exports = (usersServiceInstance) => {
  const express = require('express');
  const router = express.Router();
  router.get('/all', (req, res) => {
    usersServiceInstance
      .getAll()
      .then((users) => res.send(users.map(userDTO)))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });

  router.get('/', (req, res) => {
    const user = userDTO(req.body);
    usersServiceInstance
      .getById(user)
      .then(userDTO)
      .then((user) => res.send(user))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });

  router.post('/', (req, res) => {
    const user = userDTO(req.body);
    usersServiceInstance
      .create(user)
      .then((user) => res.send({ message: 'user created', user }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });

  router.put('/', (req, res) => {
    const user = userDTO(req.body);
    usersServiceInstance
      .update(user)
      .then((user) => res.send({ message: 'user updated', user }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });

  router.delete('/', (req, res) => {
    const user = userDTO(req.body);
    usersServiceInstance
      .delete(user)
      .then((user) => res.send({ message: 'user deleted', user }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });
  router.post('/', (req, res) => {
    const user = userDTO(req.body);
    usersServiceInstance
      .create(user)
      .then((user) => res.send({ message: 'user updated', user }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });
  router.post('/subscribe', (req, res) => {
    const user = userDTO(req.body);
    usersServiceInstance
      .setSubscription(user)
      .then((user) => res.send({ message: 'user subscribed', user }))
      .catch((err) => {
        console.log(err);
        res.send({ err: true, message: err });
      });
  });
  return router;
};
