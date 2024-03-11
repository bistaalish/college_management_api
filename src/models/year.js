const mongoose = require('mongoose');

// Schema definition for the Year model
const yearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Year name is required'], // Error message for required field
    unique: true
  },
  deleted: {
    type: Boolean,
    default: true
  }
});

// Creating the Year model
const Year = mongoose.model('Year', yearSchema);

module.exports = Year;
