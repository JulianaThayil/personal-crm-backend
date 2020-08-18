const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const debtSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  amount: { type: String, required: false },
}, {
  timestamps: false,
});

const Debt = mongoose.model('Debt', debtSchema);

module.exports = Debt;