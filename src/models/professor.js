const mongoose = require('mongoose');

// Schema definition for the Professor model
const professorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Professor name is required'], // Error message for required field
  },
  email: {
    type: String,
    required: [true, 'Email is required'], // Error message for required field
    unique: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department', // Reference to the Department model
    required: [true, 'Department is required'] // Error message for required field
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course' // Reference to the Course model
  }],
  years: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Year' // Reference to the Year model
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: [true, 'User is required'] // Error message for required field
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Validation for a 10-digit phone number
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
});

// Creating the Professor model
const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
