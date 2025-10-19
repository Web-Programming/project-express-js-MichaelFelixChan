const mongoose = require("mongoose");

//skema pengguna/user
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, 'Username harus diisi'],
        trim: true,
        unique: true,
    },
    email:{
        type: String,
        required:[true, 'Email harus diisi'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Format email harus valid'],
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required:[true, 'Password harus diisi'],
        minLength:[6, 'Panjang password minimal 6 karakter'],
        select: false,
    },
    address:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;