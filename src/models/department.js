const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Department name is required'],
    unique: true
  },
  code: {
    type: String,
    required: [true, 'Department code is required'],
    unique: true
  },
  head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professor', // Assuming there's a Professor model
    default: null
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Assuming there's a Course model,
    default: null
  }],
  deleted: {
    type: Boolean,
    default: false
  }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
