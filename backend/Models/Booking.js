const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }, // Customer Email
  workerEmail: { type: String, required: true }, // Employee Email
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
