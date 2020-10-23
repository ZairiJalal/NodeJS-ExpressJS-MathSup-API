const mongoose = require('mongoose');

const semestreSchema = mongoose.Schema({
  numero: { type: Number, required: true },
  annee_id: { type: mongoose.Schema.Types.ObjectId, required: true , ref:"Annee" },
});

module.exports = mongoose.model('Semestre', semestreSchema);
