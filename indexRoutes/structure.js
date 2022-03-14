const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const structure = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
    index: { unique: true }

  },
  age: {
    type: Number,
    default: 0,
  },
  address:{
    type:String,
    default:''
  }})
const schema = mongoose.model('TableTry', structure);
module.exports = schema;