const express = require('express');
const mongoose = require('mongoose');
const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

// mongoose.connect('mongodb://localhost:27017/aroundb');
mongoose.connect('mongodb://127.0.0.1:27017/aroundb');


app.use('/cards', cards);
app.use('/users', users);



app.use('/', (req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
