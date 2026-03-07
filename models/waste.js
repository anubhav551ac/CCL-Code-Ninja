const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  category: { type: String },  // e.g., organic, plastic
  timeperiod: { type: Date, default: Date.now },
  notes: { type: String }
});

module.exports = mongoose.model("Waste", wasteSchema);