const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const birthdaySchema = new Schema({
  nickname: { type: String, required: true },
  description: { type: String, required: false },
  birthdate: { type: String, required: true },
}, {
  timestamps: false,
});

const Birthday = mongoose.model('Birthday', birthdaySchema);

module.exports = Birthday;