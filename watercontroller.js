const Rainwater = require("../models/water");

exports.createRainwater = async (req, res) => {
  try {
    const rain = await Rainwater.create(req.body);
    res.status(201).json(rain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRainwater = async (req, res) => {
  try {
    const rain = await Rainwater.find();
    res.json(rain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRainwater = async (req, res) => {
  try {
    await Rainwater.findByIdAndDelete(req.params.id);
    res.json({ message: "rainwater record deleted :))" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//rainwatercalculator for  diddy blud 
exports.calculateHarvest = (req,res)=>{
  const { rainfall, roofArea } = req.body;

  const efficiency = 0.8;

  const waterCollected = rainfall * roofArea * efficiency;

  res.json({
    harvestedWater: waterCollected,
    unit: "litres"
  });
}