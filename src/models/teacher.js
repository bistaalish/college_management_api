const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: [4, 'Username must be at least 4 characters long']
  },
  password: {
    type: String,
    required: [true, "No password Provided"]
  },
  name: {
    type: String,
    required: [true,"name is required"],
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number']
  },
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: false
  }],
  deleted: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  }
},{ timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
