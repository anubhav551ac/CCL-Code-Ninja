const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema({
  rooftype: { type: String, required: true },       
  capacity: { type: Number, required: true },     
  collectedAmount: { type: Number, required: true }, 
  date: { type: Date, default: Date.now },          
  notes: { type: String }                            
});

module.exports = mongoose.model("Water", waterSchema);