const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  totalBeds: Number,
  icuBedsUsed: Number,
  oxygenLevel: Number,
  staffAvailable: Number,
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resource', resourceSchema);
