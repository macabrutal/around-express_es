//faltan 2 rutas para cards : likeCard / dislikeCard

const router = require('express').Router();


const { getCards, createCards, deleteCard } = require('../controllers/cards');


// definir rutas
router.get('/', getCards);
router.post('/', createCards);
router.delete('/:id', deleteCard);

module.exports = router;













//-- ANTIGIUO

// const path = require('path');
// const fs = require('fs');
// const cards = require('../data/cards.json');

// const filePath = path.join(__dirname, '../data/cards.json');

// router.get('/', (req, res) => {
//   fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
//     const cardData = JSON.parse(data);
//     res.send(cardData);
//   });
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   if (!cards[id]) {
//     res.status(400).send({ error: 'Esta card no existe' });
//     return;
//   }

//   res.status(200).send(cards[id]);
// });