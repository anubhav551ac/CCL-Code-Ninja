const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  location: { type: String },
  wateringSchedule: { type: String }, 
  growthStage: { type: String },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Plant", plantSchema);

