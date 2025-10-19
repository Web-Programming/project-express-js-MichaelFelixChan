// var express = require("express");
// var router = express.Router();
// var productController = require("../controllers/controllerProduct");

// // router.get("/all", async function(req, res, next){
// //     try{
// //         const prod = await products.find({});
// //         res.render('index', {
// //             title: 'Toko Online Sederhana - Ini dari Mongo DB',
// //             products: prod    
// //         });
// //     }catch(err){
// //         res.status(500).send("Gagal memuat produk");
// //     }
// // })

// // router.get("/:id", function(req, res, next){
// //     // const untuk nilai statis
// //     // var untuk nilai dinamis
// //     const productId = parseInt(req.params.id); // tangkap id dari url
// //     const product = products.find(p => p.id === productId); // cari produk by id

// //     if(!product){ // jika produk tidak ditemukan
// //         return res.status(404).send("Produk tidak ditemukan");
// //     }

// //     res.render("product-detail",
// //         {
// //             title:product.name,
// //             product : product
// //         }
// //     );
// // });

// // router.get("/:productId/review/:reviewId", function(req, res, next){
// //     const productId = req.params.productId; // tangkap id dari url
// //     const reviewId = req.params.reviewId;

// //     res.render("review-detail",
// //         {
// //             title: `Ulasan ${reviewId} untuk Produk ${productId}`,
// //             productId : productId,
// //             reviewId : reviewId
// //         }
// //     );
// // });

// // router.get("/all", productController.index);
// // router.get("/:id", productController.detailProduct);
// // // router.get("/:productId/review/:reviewId", productController.reviewProduct);
// // module.exports = router;