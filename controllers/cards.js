// GET /cards — devuelve todas las tarjetas
// POST /cards — crea una nueva tarjeta >> { name, link, owner: req.user._id }
// DELETE /cards/:cardId — elimina una tarjeta por _id >> findByIdAndRemove

const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(error => {
      if (error.status === 404) {
        res.status(404).send({ message: 'No se encontraron cards' });
      } else {
        res.status(500).send({ message: 'Error del servidor' });
      }
    });
};

module.exports.createCards = (req, res) => {
  const { name, link } = req.body;

  Card.create({name, link, owner: req.user._id})
    .then(card => res.send({ data: card }))
    .catch(error => {
      if (error.status === 404) {
        res.status(404).send({ message: 'No se encontraron cards' });
      } else {
        res.status(500).send({ message: 'Error del servidor' });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then(card => res.send({ data: card }))
    .catch(error => {
      if (error.status === 404) {
        res.status(404).send({ message: 'No se encontraron cards' });
      } else {
        res.status(500).send({ message: 'Error del servidor' });
      }
    });
};





