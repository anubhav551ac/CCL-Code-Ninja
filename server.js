require('dotenv').config();
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authentication");
const dashboardRoutes = require("./routes/dashboard");
dirconst aiRoutes = require("./routes/ai");
const apiRoutes = require("./routes/api");

app.use("/authentication", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/ai", aiRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 requests per minute per IP
  message: "Too many requests. Slow down."
});

app.use("/api/ai", limiter);