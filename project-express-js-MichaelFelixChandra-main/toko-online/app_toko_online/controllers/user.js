var User = require("../models/users")

// Create User
const createUser = async (req, res) => {
    try{
        const addUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
        });
        const user = await addUser.save();
        res.status(200).json({
            status: true,
            message: "Berhasil menambahkan pengguna baru",
            data: user
        })
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Internal server error"
        });
    }
};

// List Users
const listUsers = async(req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json({
            status: true,
            message: "Berhasil mengambil data pengguna",
            data: users
        });
    }catch(err){
        res.status(500).json({
            status: false,
            message: "Internal server error"
        });
    }
}

// read one user
const detailUser = async(req, res)=>{
    try{
        const idUser = req.params.id;
        const user = await User.findById(idUser);

        if(!user){
            return res.status(404).json({
                status: false,
                message: "Tidak ditemukan pengguna tersebut"
            });
        }
        res.status(200).json({
            status: true,
            message: "Detail pengguna berhasil diambil",
            data: user
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: "Internal server error"
        });
    }
};

// Update User
const updateUser = async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!user){
            return res.status(404).json({
                status: false,
                message: "Tidak ditemukan pengguna tersebut"
            });
        }else{
            res.status(200).json({
                status: true,
                message: "Detail user berhasil diambil",
                data: user
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
            status: false,
            message: "Internal server error"
        });
        }
    }
};

// Delete User
const deleteUser = async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body);

        if(!user){
            return res.status(404).json({
                status: false,
                message: "Tidak ditemukan pengguna tersebut"
            });
        }else{
            res.status(200).json({
                status: true,
                message: "Detail user berhasil dihapus",
                data: user
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
            status: false,
            message: "Internal server error"
        });
        }
    }
};
module.exports={createUser, listUsers, detailUser, updateUser, deleteUser};

// const listUser = (req, res) => {
//     res.send('respond with a resource');
// };
// module.exports={listUser};