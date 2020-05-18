const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    profileurl:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    phonenumber:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Profile', profileSchema);
