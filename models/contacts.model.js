const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactsSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },
  name:{
    type: String,
    required: true,
  },
  phone:{
    type: Number,
  },
  email:{
    type: String
  },
}, {
  timestamps: true,
});

const Contacts = mongoose.model('Contacts', contactsSchema);

module.exports = Contacts;