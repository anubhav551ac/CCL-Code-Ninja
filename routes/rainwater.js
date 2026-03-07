const express = require("express");
const router = express.Router();
const raincontroller = require("../controllers/watercontroller");

router.post("/", raincontroller.createRainwater);
router.get("/", raincontroller.getRainwater);
router.delete("/:id", raincontroller.deleteRainwater);

module.exports = router;

router.post("/calculate", raincontroller.calculateHarvest);