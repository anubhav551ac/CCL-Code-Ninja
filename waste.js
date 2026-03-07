const express = require("express");
const router = express.Router();
const wastecontroller = require("../controllers/wastecontroller");

router.post("/", wastecontroller.createWaste);
router.get("/", wastecontroller.getWaste);
router.delete("/:id", wastecontroller.deleteWaste);

module.exports = router;

router.get("/stats", wastecontroller.getWasteStats);