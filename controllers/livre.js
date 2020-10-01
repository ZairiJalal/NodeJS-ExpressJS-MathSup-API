const Livre = require('../models/livre');

// ----------------- L'ajout d'un livre -----------------------------
exports.createLivre = (req, res, next) => {
    const livre = new Livre({
        titre: req.body.titre,
        lien: req.body.lien,
        image: req.body.image,
        presentation: req.body.presentation,
        sommaire: req.body.sommaire,
        auteur: req.body.auteur
      });
    livre.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la récupération de tous les livres -----------------------------
  exports.getAllLivre=(req, res, next) => {
    Livre.find()
      .then(livres => res.status(200).json(livres))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la récupération d'un seul livre -------------------------------
  exports.getOneLivre = (req, res, next) => {
    Livre.findOne({ _id: req.params.id })
      .then(livre => res.status(200).json(livre))
      .catch(error => res.status(404).json({ error }));
  };
// ----------------- la modification d'un livre --------------------------------------
  exports.modifyLivre = (req, res, next) => {
    const livre = new Livre({
        _id: req.params.id,
        titre: req.body.titre,
        lien: req.body.lien,
        image: req.body.image,
        presentation: req.body.presentation,
        sommaire: req.body.sommaire,
        auteur: req.body.auteur
      });
    Livre.updateOne({ _id: req.params.id }, livre)
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };
// ----------------- la suppression d'un livre --------------------------------------
  exports.deleteLivre =  (req, res, next) => {
    Livre.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };