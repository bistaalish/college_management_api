const mongoose = require('mongoose');

// Schema definition for the Course model
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Course name is required'], // Error message for required field
    unique: true
  },
  code: {
    type: String,
    required: [true, 'Course code is required'], // Error message for required field
    unique: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department', // Reference to the Department model
    required: [true, 'Department is required'] // Error message for required field
  },
  credits: {
    type: Number,
    required: [true, 'Credits are required'] // Error message for required field
  }
});

// Creating the Course model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
