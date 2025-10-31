const Order = require('../models/orders');
const Product = require('../models/products')

const createOrder = async (req, res) => {
    const {user, orderItems} = req.body;
    try {
        let totalAmount = 0;
        const itemsWithPrice = [];
        for (const item of orderItems) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ 
                success: false, 
                message: `Produk dengan ID ${item.product} tidak ditemukan.` 
            });
        }

        const itemTotal = product.price * item.quantity;
            totalAmount += itemTotal;
            itemsWithPrice.push({
                product: item.product,
                quantity: item.quantity,
                priceAtOrder: product.price, // Ambil harga real-time dari DB
            });
        }

        const addOrder = new Order({
            user,
            orderItems: itemsWithPrice,
            totalAmount,
        });
        
        const order = await addOrder.save();
        res.status(201).json({
            status: true,
            message: "Berhasil menambahkan pesanan baru",
            data: order
        });
    }catch(err){
        console.error(err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ 
                success: false, 
                message: err.message 
            });
        }
        res.status(500).json({
            status : false,
            message: "Internal server error",
            error: err.message
        });
    }
};

const listOrders = async (req, res) => {
    try{
        const orders = await Order.find()
            .populate('user')
        
        res.status(200).json({
            status: true,
            message: "Berhasil mengambil data pesanan",
            data: orders,
        });
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Internal server error"
        });
    }
};

const detailOrder = async (req, res) => {
    try{
        const idOrder = req.params.id;
        const order = await Order.findById(idOrder);

        if(!order){
            return res.status(404).json({
                status: false,
                message: "Tidak menemukan pesanan tersebut"
            });
        }
        res.status(200).json({
            status: true,
            message: "Detail pesanan berhasil diambil",
            data: order
        })
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Internal server error"
        });
    }
};

const updateOrder = async (req, res) => {
    try{
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            new: true,
            status: req.body.status
        });
        if(!updateOrder){
            return res.status(404).json({
                status: false,
                message: "Tidak menemukan pesanan tersebut"
            });
        }else{
            res.status(200).json({
                status: true,
                message: "Detail pesanan berhasil diupdate",
                data: updateOrder
            });
        }
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Internal server error"
        });
    }
};

module.exports = {createOrder, listOrders, detailOrder, updateOrder};