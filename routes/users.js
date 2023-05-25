const router = require('express').Router();
const { users } = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;

  if (!users[id]) {
    res.send({ error: `Este usuario no existe` });
    return;
  }

  res.send(users[id]);
});

module.exports = router;




// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.json(users);
// });

// module.exports = router;