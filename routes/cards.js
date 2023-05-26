const router = require('express').Router();
const cards = require('../data/cards.json');
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "../data/cards.json");

router.get("/", (req, res) => {
  fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
    const cardData =JSON.parse(data);
    res.send(cardData)
});
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!cards[id]) {
    res.status(400).send({ error: 'Esta card no existe' });
    return;
  }

  res.status(200).send(cards[id]);
});



module.exports = router;

//app.get('/', (req, res) => {


// router.get('/', (req, res) => {
//   res.send(cards);
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   if (!cards[id]) {
//     res.send({ error: 'Esta card no existe' }).status(404);
//     return;
//   }

//   res.send(cards[id]).status(200);
// });

// module.exports = router;
