const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  size: [String],
  rating: Number,
  price: Number,
  category: String,
});

module.exports = mongoose.model('Product', productSchema);
