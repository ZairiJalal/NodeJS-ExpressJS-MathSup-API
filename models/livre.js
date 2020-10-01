const mongoose = require('mongoose');

const livreSchema = mongoose.Schema({
  titre: { type: String, required: true },
  lien: { type: String, required: true },
  image: { type: String, required: true },
  presentation: { type: String , required: true },
  sommaire: { type: String  , required: true },
  auteur: { type: String , required: true },
});

module.exports = mongoose.model('Livre', livreSchema);
