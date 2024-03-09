const mongoose = require('mongoose');

// Schema definition for the Attendance model
const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Reference to the Student model
    required: [true, 'Student is required'] // Error message for required field
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Reference to the Course model
    required: [true, 'Course is required'] // Error message for required field
  },
  date: {
    type: Date,
    required: [true, 'Date is required'] // Error message for required field
  },
  present: {
    type: Boolean,
    default: false
  }
});

// Creating the Attendance model
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
