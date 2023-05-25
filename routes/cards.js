const router = require('express').Router();
const { cards } = require('../data/cards.json');

router.get('/cards', (req, res) => {
  res.send(cards);
});

router.get('/cards/:id', (req, res) => {
  const { id } = req.params;

  if (!cards[id]) {
    res.send({ error: `Esta card no existe` });
    return;
  }

  res.send(cards[id]);
});

module.exports = router;




// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.json(cards);
// });

// module.exports = router;