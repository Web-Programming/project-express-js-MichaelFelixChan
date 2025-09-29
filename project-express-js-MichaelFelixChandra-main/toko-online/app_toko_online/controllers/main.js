var products = require("../../data/products.json");

const index = (req, res) => {
    res.render('index', {
    title: 'Toko Online Sederhana',
    products: products
  });
};

const search = (req, res) => {
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
};
module.exports={index, search};