const express = require('express');
const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/cards', cards);
app.use('/users', users);

app.use('/', (req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {});
