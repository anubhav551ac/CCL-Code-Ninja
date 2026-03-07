const express = require("express");
const router = express.Router();
const plantsController = require("../controllers/plantscontroller");

router.post("/", plantsController.createPlant);
router.get("/", plantsController.getPlants);
router.delete("/:id", plantsController.deletePlant);

module.exports = router;