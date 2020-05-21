const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    coverurl:{
        type:String
    },
    profileurl:{
        type:String
    },
    school:{
        type:String
    },
    department:{
        type:String,
        required:true
    },
    currentcity:{
        type:String
    },
    hometown:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    birthday:{
        type:Date
    },
    gender:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Profile', profileSchema);
