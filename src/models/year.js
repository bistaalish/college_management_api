const mongoose = require('mongoose');

// Schema definition for the Year model
const yearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Year name is required'], // Error message for required field
    unique: true
  },
  start_date: {
    type: Date,
    required: [true, 'Start date is required'] // Error message for required field
  },
  end_date: {
    type: Date,
    required: [true, 'End date is required'] // Error message for required field
  }
});

// Creating the Year model
const Year = mongoose.model('Year', yearSchema);

module.exports = Year;
