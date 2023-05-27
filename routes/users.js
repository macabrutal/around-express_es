const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const users = require('../data/users.json');

const filePath = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      const userData = JSON.parse(data);
      res.send(userData);
    });
  } catch (error) {
    res.status(500).send({ message: 'An error has ocurred on the server' });
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!users[id]) {
    res.status(404).send({ message:  'ID de usuario no encontrado' });
    return;
  }
  res.status(200).send(users);
});

module.exports = router;




// router.get('/', (req, res) => {
//   res.send(users);
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   const user = users.find((user) => user._id === id);

//   if (!user) {
//     res.send({ error: 'ID de usuario no encontrado' }).status(404);
//     return;
//   }
//   res.send(user).status(200);
// });

// module.exports = router;
