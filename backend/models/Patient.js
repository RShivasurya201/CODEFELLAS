const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: String,
  name: String,
  arrivalTime: { type: Date, default: Date.now },
  severity: String, // "High", "Medium", "Low"
  oxygenNeed: Boolean, // Does patient need O2?
  assignedBed: String,
  ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward' }, // Link to Ward
  status: { type: String, default: "Admitted" }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
