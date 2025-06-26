// backend/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: String,
    enum: ['To-do', 'In Progress', 'Done'],
    default: 'To-do'
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
