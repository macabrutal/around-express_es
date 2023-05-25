const router = require('express').Router();
const users  = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;

  if (!users[id]) {
    res.send({ error: `ID de usuario no encontrado` }).status(404);
    return;
  }

  res.send(users[id]);
});


module.exports = router;




