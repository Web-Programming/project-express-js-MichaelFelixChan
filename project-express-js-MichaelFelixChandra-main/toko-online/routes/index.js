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

router.get("/search", function(req, res, next){
  const q = req.query.q ? req.query.q.toLowerCase() : "";
  let filteredProducts;
  if(q === ""){
    filteredProducts = products;
  }else{
    filteredProducts=products.filter((product) =>
      product.name.toLowerCase().includes(q)
    );
  }
  res.render("index", {
    title: "Hasil Pencarian",
    products: filteredProducts,
    query: q
  });
});

module.exports = router;
