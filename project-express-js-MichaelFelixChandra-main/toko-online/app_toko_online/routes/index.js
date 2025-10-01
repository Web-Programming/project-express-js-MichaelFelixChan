var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Toko Online Sederhana',
//     products: products
//   });
// });

// router.get("/search", function(req, res, next){
//   const q = req.query.q ? req.query.q.toLowerCase() : "";
//   let filteredProducts;
//   if(q === ""){
//     filteredProducts = products;
//   }else{
//     filteredProducts=products.filter((product) =>
//       product.name.toLowerCase().includes(q)
//     );
//   }
//   res.render("index", {
//     title: "Hasil Pencarian",
//     products: filteredProducts,
//     query: req.query.q
//   });
// });

router.get("/", mainController.index);
router.get("/search", mainController.search);

module.exports = router;