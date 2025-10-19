var Order = require('../models/orders');

const createOrder = async (req, res) => {
    try{
        const {user, orderItems} = req.body;

        const totalAmount = orderItems.reduce((sum, item) => {
            return sum + item.quantity * item.priceAtOrder;
        }, 0);

        const addOrder = new Order({
            user,
            orderItems,
            totalAmount,
            status: 'Pending',
            orderDate: Date.now()
        });
        
        const order = await addOrder.save();
        res.status(200).json({
            status: true,
            message: "Berhasil menambahkan pesanan baru",
            data: order
        });
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Internal server error"
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
            message: "Internal server error",
            error: err.message
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