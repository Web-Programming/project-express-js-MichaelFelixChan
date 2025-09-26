var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Toko Online Sederhana',
    products: products
  });
});

router.get('/search', function(req, res, next){
  const q = req.query.q ? req.query.q.toLowerCase() : '';
  let filteredProducts = products;
  if(q){
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );
  }
  res.render('index', {
    title: 'Hasil Pencarian',
    products: filteredProducts,
    searchQuery: req.query.q || '',
  });
});

module.exports = router;
