require('dotenv').config();
const express = require("express");

const app = express();
const path = require("path");

<<<<<<< HEAD
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

=======
// Import routes
const dashboardRoutes = require("./routes/dashboard");
const authRoutes = require("./routes/authentication");
const apiRoutes = require("./routes/api");

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Mount routes
app.use("/dashboard", dashboardRoutes);
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

>>>>>>> 9b4e09b (alldone)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

<<<<<<< HEAD
=======
// Serve all other HTML files
app.get("/:page", (req, res) => {
  const page = req.params.page;
  const validPages = ['homepage.html', 'plants.html', 'rain.html', 'waste.html', 'disposal.html', 'About.html', 'about.html', 'disopsal.html'];
  
  if (validPages.includes(page)) {
    res.sendFile(path.join(__dirname, "..", "frontend", page));
  } else {
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
  }
});

>>>>>>> 9b4e09b (alldone)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
