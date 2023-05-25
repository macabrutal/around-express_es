const router = require('express').Router();
const cards  = require('../data/cards.json');

router.get('/cards', (req, res) => {
  res.send(cards);
});

router.get('/cards/:id', (req, res) => {
  const { id } = req.params;

  if (!cards[id]) {
    res.send({ error: `Esta card no existe` }).status(404);
    return;
  }

  res.send(cards[id]);
});

module.exports = router;




