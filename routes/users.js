//faltan 2 rutas para users: updateProfile / updateAvatar
// PATCH /users/me — actualizar el perfil
// PATCH /users/me/avatar — actualizar el avatar

const router = require('express').Router();

const { getUser, getUserById, createUser } = require('../controllers/users');

// definir rutas
router.get('/', getUser);
router.get('/:id', getUserById)
router.post('/', createUser);



module.exports = router;








//ANTIGUO
// const path = require('path');
// const fs = require('fs');

// const filePath = path.join(__dirname, '../data/users.json');

// router.get('/', (req, res) => {
//   try {
//     fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
//       const userData = JSON.parse(data);
//       res.send(userData);
//     });
//   } catch (error) {
//     res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
//   }
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error al leer el archivo JSON:', err);
//       res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
//       return;
//     }

//     const users = JSON.parse(data);
//     const user = users.find((userValue) => userValue._id === id);

//     if (!user) {
//       res.status(404).send({ message: 'ID de usuario no encontrado' });
//       return;
//     }

//     res.status(200).send(user);
//   });
// });
