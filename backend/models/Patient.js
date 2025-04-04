const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: String,
  arrivalTime: String,
  severity: String,
  assignedBed: String,
  status: String,
});

module.exports = mongoose.model('Patient', patientSchema);
