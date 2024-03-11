const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true,unique:true },
  deleted: {type: String, default: false}
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
