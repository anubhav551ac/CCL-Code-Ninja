const getDashboard = (req, res) => {
  res.json({
    message: "Dashboard placeholder",
    widgets: ["AI suggestions", "Theme ideas", "Stats"]
  });
};

module.exports = { getDashboard };