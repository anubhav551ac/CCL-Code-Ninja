const Plant = require("../models/plant");

// Create a plant
exports.createPlant = async (req, res) => {
  try {
    const plant = await Plant.create(req.body);
    res.status(201).json(plant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all plants
exports.getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a plant by ID
exports.deletePlant = async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.json({ message: "Plant deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};