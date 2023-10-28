var express = require('express');
var router = express.Router();
var Product = require('../models/Products');

router.get('/', (req, res) => {
    res.send('test products route');
});

router.get('/:category', (req, res) => {
    const category = req.params.category;

    Product.getByCategory(category, (error, products) => {
        if (error) {
        res.status(500).json({ error: 'Error fetching products' });
        } else {
        res.json(products);
        }
    });
});

module.exports = router;