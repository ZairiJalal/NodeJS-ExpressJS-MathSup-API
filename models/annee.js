const mongoose = require('mongoose');

const anneeSchema = mongoose.Schema({
  numero: { type: Number, required: true },
});

module.exports = mongoose.model('Annee', anneeSchema);
