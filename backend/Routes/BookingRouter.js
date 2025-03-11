const express = require('express');
const router = express.Router();
const History = require("../Models/History");
const {createBooking, getBookings, deleteBooking } = require("../Controllers/BookingController");

router.get("/bookings", getBookings);
router.delete("/bookings/:id", deleteBooking);
router.post('/bookings', createBooking);
router.get("/history", async (req, res) => {
    try {
      const history = await History.find();
      res.json(history);
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
module.exports = router;
