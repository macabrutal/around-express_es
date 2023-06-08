// FALTAN 2:
// PATCH /users/me — actualizar el perfil
// PATCH /users/me/avatar — actualizar el avatar

const User = require('../models/user');

module.exports.getUser = (req, res) => {
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(error => {
      if (error.status === 404) {
        res.status(404).send({ message: 'No se encontraron usuarios' });
      } else {
        res.status(500).send({ message: 'Error del servidor' });
      }
    });
};


module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({ data: user }))
    .catch(error => {
      if (error.status === 404) {
        res.status(404).send({ message: 'No se encontraron usuarios' });
      } else {
        res.status(500).send({ message: 'Error del servidor' });
      }
    });
};


module.exports.createUser= (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(error => {
      if (error.status === 404) {
        res.status(404).send({ message: 'No se encontraron usuarios' });
      } else {
        res.status(500).send({ message: 'Error del servidor' });
      }
    });
};





