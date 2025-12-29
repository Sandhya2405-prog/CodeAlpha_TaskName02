const express = require('express');
const mongoose = require('mongoose');

const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});