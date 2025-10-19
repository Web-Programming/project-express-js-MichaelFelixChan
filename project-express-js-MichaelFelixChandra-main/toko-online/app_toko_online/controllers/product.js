// var products = require("../../data/products.json");
var Product = require("../models/products")

const index = async (req, res)=> {
    try{
        const prod = await Product.find({});
        res.render('index', {
            title: 'Toko Online Sederhana - Ini dari Mongo DB',
            products: prod    
        });
    }catch(err){
        res.status(500).send("Gagal memuat produk");
    }
};

const detailProduct = async (req, res) => {
    try{
        const productId = req.params.id; // tangkap id dari url
        // const product = products.find(p => p.id === productId); // cari produk by id
        const product = await Product.findById(productId);

        if(!product){ // jika produk tidak ditemukan
            return res.status(404).send("Produk tidak ditemukan");
        }

        res.render("product-detail",
            {
                title:product.name,
                product : product
            }
        );
    }catch(err){
        res.status(404).send("Gagal memuat detail produk");
    }
};

const reviewProduct = (req, res, next) => {
    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    res.render("review-detail", {
        title: `Ulasan ${reviewId} untuk produk ${productId}`,
        productId : productId,
        reviewId : reviewId
    });
};

const all = async (req, res) => {
 	try {
        const prod = await Product.find({}); 
        res.status(200).json(
            {
                status: true,
                message: "Data produk berhasil diambil",
                data: prod
            });
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Gagal memuat produk"
        });
    }
}; 


// CRUD Controller
// Create/insert data
const create = async (req, res) => {
    try{
        // ambil data dari request body
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock || 0
        });
        // simpan data ke mongo db melalui model product
        const product = await newProduct.save()
        // kirim respon sukses ke user
        res.status(200).json({
            status: true,
            message: "Produk berhasil diinput",
            data: product
        })
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Internal server error"
        });
    }
};

// read one /detail product
const detailProduk = async(req, res) => {
    try{
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if(!product) {
            return res.status(404).json({
                status: "false",
                message: "Produk tidak ditemukan"
            });
        }
        res.status(200).json({
            status: true,
            message: "Detail produk berhasil diambil",
            data: product
        })
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Internal server error"
        });
    }
};

// update product
const update = async(req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, //mengembalikkan dokumen yang telah di update
            runValidators: true //menjalankan validasi schema saat dijalankan
        });
        if(!product) {
            return res.status(404).json({
                status: "false",
                message: "Produk tidak ditemukan"
            });
        }else{
            res.status(200).json({
            status: true,
            message: "Detail produk berhasil diambil",
            data: product
        });
        }
    }catch(err){
        if(err.name === 'CastError'){
            res.status(400).json({
                status: false,
                message: "Format ID tidak valid"
            });
        }else if(err.name === 'ValidationError'){
            res.status(400).json({
                status: false,
                message: err.message
            });
        }else{
            res.status(500).json({
            status : false,
            message: "Internal server error"
        });
        }
    }
};

// update product
const remove = async(req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id, req.body, {
            
        });
        if(!product) {
            return res.status(404).json({
                status: "false",
                message: "Produk tidak ditemukan"
            });
        }else{
            res.status(200).json({
            status: true,
            message: "Detail produk berhasil dihapus",
            data: product
        })
    };
    }catch(err){
        if(err.name === 'CastError'){
            res.status(400).json({
                status: false,
                message: "Format ID tidak valid"
            });
        }else{
            res.status(500).json({
            status : false,
            message: "Internal server error"
        });
        }
    }
};

module.exports={index, detailProduct, reviewProduct, create, all, detailProduk, update, remove};