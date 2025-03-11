// models/WorkerCard.js
const mongoose = require('mongoose');

const WorkerCardSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    default: '',
  },
  selectedTasks: {
    type: [String],
    default: [],
  },
  phoneNumber: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const UpdateJob = mongoose.models.WorkerCard || mongoose.model('WorkerCard', WorkerCardSchema);


module.exports =UpdateJob;
