const express = require("express");
const router = express.Router();
const { getWorkers } = require("../controllers/CustomerController");

router.get("/workers", getWorkers);

module.exports = router;
