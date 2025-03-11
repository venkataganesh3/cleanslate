const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  phone: String,
  email: String,
  workerEmail: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('History', HistorySchema);
