const prediction = require('../mock/predictions.json');

const getPredictions = (req, res) => {
  res.json(prediction);
};

module.exports = { getPredictions };
