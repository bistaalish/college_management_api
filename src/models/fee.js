const mongoose = require('mongoose');

// Schema definition for the Fee model
const feeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Reference to the Student model
    required: [true, 'Student is required'] // Error message for required field
  },
  year: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Year', // Reference to the Year model
    required: [true, 'Year is required'] // Error message for required field
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'] // Error message for required field
  },

  paid: {
    type: Boolean,
    default: false
  },
  clearedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  }
});

// Creating the Fee model
const Fee = mongoose.model('Fee', feeSchema);

module.exports = Fee;
