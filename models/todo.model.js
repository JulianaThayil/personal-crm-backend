const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  deadline: { type: String, required: false },
}, {
  timestamps: false,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;