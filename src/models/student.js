const mongoose = require('mongoose');

// Schema definition for the Student model
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student name is required'], // Error message for required field
  },
  rollNumber: {
    type: String,
    required: [true, 'Roll number is required'], // Error message for required field
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'], // Error message for required field
    unique: true
  },
  age: {
    type: Number,
    required: [true, 'Age is required'], // Error message for required field
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, 'Gender is required'], // Error message for required field
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'] // Error message for required field
  },
  year: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Year' // Reference to the Year model
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Validation for a 10-digit phone number
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  parentPhone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Validation for a 10-digit phone number
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course' // Reference to the Course model
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: [true, 'User is required'] // Error message for required field
  },
});

// Creating the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
