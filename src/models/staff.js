const mongoose = require('mongoose');

// Schema definition for the Staff model
const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Staff name is required'], // Error message for required field
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

// Creating the Staff model
const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
