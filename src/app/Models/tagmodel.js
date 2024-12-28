const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  count: { type: Number, required: true, default: 0 }
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
