const mongoose = require("mongoose");

const wardSchema = new mongoose.Schema({
  name: String,
  beds: [{ occupied: Boolean }],
  oxygenLevel: Number,
  staffAvailable: Number,
  patients: [{ name: String, severity: String }],
});

module.exports = mongoose.model("Ward", wardSchema);
