const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema({
  titre: { type: String, required: true },
  descp: { type: String, required: true },
  semestre_id: { type: mongoose.Schema.Types.ObjectId, required: true , ref:"Semestre"  },
});

module.exports = mongoose.model('Module', moduleSchema);
