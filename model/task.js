const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: String },
  priority: { type: String },
  selectedStatus: { type: String },
  assignedUser: { type: String }
});

module.exports = mongoose.model('Task', taskSchema);
