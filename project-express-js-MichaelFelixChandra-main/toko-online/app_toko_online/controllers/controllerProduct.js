var products = require("../../data/products.json");

const detailProduct = (req, res) => {
    const productId = parseInt(req.params.id); // tangkap id dari url
    const product = products.find(p => p.id === productId); // cari produk by id

    if(!product){ // jika produk tidak ditemukan
        return res.status(404).send("Produk tidak ditemukan");
    }

    res.render("product-detail",
        {
            title:product.name,
            product : product
        }
    );
};

const reviewProduct = (req, res, next) => {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;

    res.render("review-detail", {
        title: `Ulasan ${reviewId} untuk produk ${productId}`,
        productId : productId,
        reviewId : reviewId
    });
};
module.exports={detailProduct, reviewProduct};