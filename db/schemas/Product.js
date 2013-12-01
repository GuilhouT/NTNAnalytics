var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  name: String,
  description: String,
  manufacturer: { type: 'ObjectId', ref: 'Company' },

  color: String,
  releaseDate: Date,
  price: Number,

  category: String,
  mondel: String,

  rating: Number,
  reviews: Number
});