const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  type: String,
  labels: [String],
  dataPoints: [Number],
  generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Prediction', predictionSchema);
