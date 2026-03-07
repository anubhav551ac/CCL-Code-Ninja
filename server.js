require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const mongoose = require("mongoose");
const { Configuration, OpenAIApi } = require("openai"); // added OpenAI

const app = express();

app.use(cors());
app.use(express.json());

const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Too many requests. Slow down."
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);


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


app.post("/api/ai/test", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });
    res.json({ answer: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));