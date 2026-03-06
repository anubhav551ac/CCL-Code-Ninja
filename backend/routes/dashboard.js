const express = require("express");
const router = express.Router();
const { getDashboard } = require("../controllers/dashboardcontroller");

router.get("/", getDashboard);

module.exports = router;
