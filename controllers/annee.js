const Annee = require('../models/annee');


exports.createAnnee = (req, res, next) => {
  const annee = new Annee({
       numero: req.body.numero,
    });
    annee.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.getAllAnnee=(req, res, next) => {
    Annee.find()
      .then(annees => res.status(200).json(annees))
      .catch(error => res.status(400).json({ error }));
  };

exports.getOneAnnee = (req, res, next) => {
    Annee.findOne({ _id: req.params.id })
      .then(annee => res.status(200).json(annee))
      .catch(error => res.status(404).json({ error }));
  };