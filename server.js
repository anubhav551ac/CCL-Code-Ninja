require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// Rate limiter for AI
const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Too many requests. Slow down."
});

// Routes
const authRoutes = require("./routes/authentication");
const dashboardRoutes = require("./routes/dashboard");
const aiRoutes = require("./routes/ai");
const wasteRoutes = require("./routes/waste");
const rainRoutes = require("./routes/rainwater");
//const plantRoutes = require("./routes/plant");

app.use("/authentication", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/api/ai", aiLimiter, aiRoutes);
app.use("/api/waste", wasteRoutes);
app.use("/api/rainwater", rainRoutes);
//app.use("/api/plant", plantRoutes);

app.get("/", (req, res) => res.send("Backend API is running!"));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));