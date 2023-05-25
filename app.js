const express = require('express');
 const cards = require('./routes/cards');
 const users = require('./routes/users');


const { PORT = 3000 } = process.env;    // detecta el puerto 3000

const app = express();

app.use('/routes', cards);
app.use('/routes', users);

app.listen(PORT, () => {
  // si todo funciona bien la consola mostrará qué puerto está detectando la aplicación
  console.log(`App listening at port ${PORT}`);
})



