const mongoose = require("mongoose");

//skema produk
const ProductSchema = new mongoose.Schema({
    //tidak perlu membuat properti id karena akan dibuat 
    name: {
        type: String,
        required:[true, 'Nama produk harus diisi'],
        trim:true, // untuk menghapus spasi
    },
    price: {
        type: Number,
        required:[true, 'Harga produk harus diisi'],
        min:[1000, "Harga produk minimal seribu"], //nilai minimum
    },
    description: {
        type: String,
        required:false, //menandakan kolom wajib diisi/tidak
    },
    stock: {
        type: Number,
        default: 0, //ini memberikan nilai bawaan/default
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

//Buat model dari schema
const Product = mongoose.model('Product', ProductSchema, "products");
module.exports = Product;