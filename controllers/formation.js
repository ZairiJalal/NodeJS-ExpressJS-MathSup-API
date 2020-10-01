const Formation = require('../models/formation');

// ----------------- L'ajout d'une formation -----------------------------
exports.createFormation = (req, res, next) => {
    const formation = new Formation({
        titre: req.body.titre,
        lien: req.body.lien,
        type: req.body.type,
        module_id: req.body.module_id
      });
    formation.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la récupération de toutes les formations -----------------------------

  exports.getAllFormation=(req, res, next) => {
    Formation.find()
      .then(formations => res.status(200).json(formations))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la récupération d'une seule formation -------------------------------

  exports.getOneFormation = (req, res, next) => {
    Formation.findOne({ _id: req.params.id })
      .then(formation => res.status(200).json(formation))
      .catch(error => res.status(404).json({ error }));
  };
// ----------------- la modification d'une formation --------------------------------------
  exports.modifyFormation = (req, res, next) => {
    const formation = new Formation({
        _id: req.params.id,
        titre: req.body.titre,
        lien: req.body.lien,
        type: req.body.type,
        module_id: req.body.module_id
      });
    Formation.updateOne({ _id: req.params.id }, formation)
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la suppression d'une formation  --------------------------------------
  exports.deleteFormation =  (req, res, next) => {
    Formation.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };