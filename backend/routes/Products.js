const express = require('express');
const router = express.Router();
const Product = require('../routes/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // or use filters like { category: "Shirts" }
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
