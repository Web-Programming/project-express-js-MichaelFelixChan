var express = require('express');
var router = express.Router();
var products = require("../data/products.json");

router.get("/:id", function(req, res, next){
    // const untuk nilai statis
    // var untuk nilai dinamis
    const productId = parseInt(req.params.id); // tangkap id dari url
    const product = products.find(p => p.id === productId); // cari produk by id

    if(!products){ // jika produk tidak ditemukan
        return response.status(404).send("Produk tidak ditemukan");
    }

    res.render("product-detail",
        {
            title:product.name,
            product : product
        }
    );
});

module.exports = router;