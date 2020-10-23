const mongoose = require('mongoose');

const formationSchema = mongoose.Schema({
  titre: { type: String, required: true },
  lien: { type: String, required: true },
  type: { type: String, required: true },
  module_id: { type: mongoose.Schema.Types.ObjectId, required: true , ref:"Module" },
});

module.exports = mongoose.model('Formation', formationSchema);