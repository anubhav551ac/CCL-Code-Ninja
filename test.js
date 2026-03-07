
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI; // make sure your .env has MONGO_URI=<your connection string>

mongoose.connect(uri)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));