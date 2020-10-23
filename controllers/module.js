const Module = require('../models/module');

exports.createModule = (req, res, next) => {
  const module = new Module({
      titre: req.body.titre,
      descp: req.body.descp,
      semestre_id: req.body.semestre_id
    });
    module.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};


// ----------------- la récupération de tous les livres -----------------------------
exports.getAllModule=(req, res, next) => {
    Module.find()
      .then(modules => res.status(200).json(modules))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la récupération d'un seul livre -------------------------------
  exports.getOneModule = (req, res, next) => {
    Module.findOne({ _id: req.params.id })
      .then(module => res.status(200).json(module))
      .catch(error => res.status(404).json({ error }));
  };