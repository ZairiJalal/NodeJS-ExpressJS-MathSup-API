const Semestre = require('../models/semestre');


exports.createSemestre = (req, res, next) => {
  const semestre = new Semestre({
      numero: req.body.numero,
      annee_id: req.body.annee_id,
    });
    semestre.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

// ----------------- la récupération de tous les livres -----------------------------
exports.getAllSemestre=(req, res, next) => {
    Semestre.find()
      .then(semestres => res.status(200).json(semestres))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la récupération d'un seul livre -------------------------------
  exports.getOneSemestre = (req, res, next) => {
    Semestre.findOne({ _id: req.params.id })
      .then(semestre => res.status(200).json(semestre))
      .catch(error => res.status(404).json({ error }));
  };