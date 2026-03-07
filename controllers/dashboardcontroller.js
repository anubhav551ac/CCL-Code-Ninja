const Waste = require("../models/waste");
const Plant = require("../models/plant");
const Rain = require("../models/water");

exports.getDashboardSummary = async (req, res) => {
  try {

    const totalWasteEntries = await Waste.countDocuments();
    const totalPlants = await Plant.countDocuments();
    const totalRainLogs = await Rain.countDocuments();

    const wasteData = await Waste.find();

    let totalWasteAmount = 0;

    wasteData.forEach(w => {
      totalWasteAmount += w.amount || 0;
    });

    res.json({
      wasteEntries: totalWasteEntries,
      totalWasteCollected: totalWasteAmount,
      plantsPlanted: totalPlants,
      rainwaterLogs: totalRainLogs
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getDashboard = async (req,res)=>{

  const wasteCount = await Waste.countDocuments();
  const plantCount = await Plant.countDocuments();
  const rainCount = await Rain.countDocuments();

  res.json({
    wasteEntries: wasteCount,
    plantsPlanted: plantCount,
    rainLogs: rainCount
  });

}