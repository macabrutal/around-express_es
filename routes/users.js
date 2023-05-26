const router = require('express').Router();
const users  = require('../data/users.json');

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user)=> user._id === id)

  if (!user) {
    res.send({ error: `ID de usuario no encontrado` }).status(404);
    return;
  }
  res.send(user);
});


module.exports = router;




