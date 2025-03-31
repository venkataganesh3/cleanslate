const express = require("express");
const router = express.Router();
const { getWorkers } = require("../Controllers/CustomerController");

router.get("/workers", getWorkers);

module.exports = router;
