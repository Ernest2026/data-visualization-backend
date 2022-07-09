const express = require("express");
const router = express.Router();
const dataController = require("../controllers/data");

router.get("/data/stats", dataController.stats);

router.get("/data/search", dataController.search);

module.exports = router;
