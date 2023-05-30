const router = require('express').Router();
const path = require('path');
const fs = require('fs');
// const users = require('../data/users.json');

const filePath = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  try {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      const userData = JSON.parse(data);
      res.send(userData);
    });
  } catch (error) {
    res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find((userValue) => userValue._id === id);

    if (!user) {
      res.status(404).send({ message: 'ID de usuario no encontrado' });
      return;
    }

    res.status(200).send(user);
  });
});

module.exports = router;
