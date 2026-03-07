const Waste = require("../models/waste");

exports.createWaste = async (req, res) => {
  try {
    const waste = await Waste.create(req.body);
    res.status(201).json(waste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWaste = async (req, res) => {
  try {
    const waste = await Waste.find();
    res.json(waste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteWaste = async (req, res) => {
  try {
    await Waste.findByIdAndDelete(req.params.id);
    res.json({ message: "waste record deleted :)" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//analyctics
exports.getWasteStats = async (req, res) => {
  try {
    const waste = await Waste.find();

    let total = 0;
    let types = {};

    waste.forEach(w => {
      total += w.amount;

      if (!types[w.type]) {
        types[w.type] = 0;
      }

      types[w.type] += w.amount;
    });

    res.json({
      totalWaste: total,
      breakdown: types
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};