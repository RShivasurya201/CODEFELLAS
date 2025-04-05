const express = require("express");
const router = express.Router();
const Ward = require("../models/Ward");

// Get all wards
router.get("/wards", async (req, res) => {
  const wards = await Ward.find();
  res.json(wards);
});

// Seed sample ward data
router.get("/seed-wards", async (req, res) => {
  try {
    await Ward.deleteMany(); // Clear old data

    await Ward.insertMany([
      {
        name: "Ward A",
        oxygenLevel: 92,
        staffAvailable: 6,
        beds: Array(20).fill({ occupied: false }),
        patients: []
      },
      {
        name: "Ward B",
        oxygenLevel: 80,
        staffAvailable: 4,
        beds: Array(20).fill({ occupied: false }),
        patients: []
      },
      {
        name: "Ward C",
        oxygenLevel: 70,
        staffAvailable: 3,
        beds: Array(20).fill({ occupied: false }),
        patients: []
      }
    ]);

    res.send("✅ Sample ward data inserted successfully.");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add patient (Auto Allocates Bed)
router.post("/add-patient", async (req, res) => {
  const { name, severity } = req.body;

  // Find best ward with a free bed, sorted by oxygen level and staff
  const wards = await Ward.find();

  let bestWard = null;
  let bestScore = -1;

  for (let ward of wards) {
    const availableBeds = ward.beds.filter((b) => !b.isOccupied);
    if (availableBeds.length === 0) continue;

    // Calculate a score to find best ward
    const score = ward.oxygenLevel * 0.6 + ward.staffAvailable * 0.4;

    if (score > bestScore) {
      bestScore = score;
      bestWard = ward;
    }
  }

  if (!bestWard) {
    return res.status(400).json({ message: "No available beds!" });
  }

  // Allocate first free bed
  const bedIndex = bestWard.beds.findIndex((b) => !b.isOccupied);
  bestWard.beds[bedIndex].isOccupied = true;

  // Add patient
  bestWard.patients.push({ name, severity });
  await bestWard.save();

  res.json({ message: `Patient added to ${bestWard.name}`, ward: bestWard.name, bed: bestWard.beds[bedIndex].bedNumber });
});

module.exports = router;
