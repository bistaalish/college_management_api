const mongoose = require('mongoose');

// Schema definition for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'], // Error message for required field
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'] // Error message for required field
  },
  role: {
    type: String,
    enum: ['admin', 'faculty', 'student', 'finance', 'administration', 'teacher'],
    required: [true, 'Role is required'], // Error message for required field
  }
});

// Creating the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
