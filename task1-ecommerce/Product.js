const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

// Export Model
module.exports = mongoose.model("Product", productSchema);