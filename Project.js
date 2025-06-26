// backend/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  deadline: Date
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
