const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    imageurl:{
        type:String
    },
    text:{
        type:String
    },
    comment:[
        {
            userId:{
                type:Schema.Types.ObjectId,
                ref:'User'
            },
            text:{
                type:String,
                required:true
            },
            username:{
                type:String,
                
            },
            profileurl:{
                type:String
            },
            reply:[
                {
                    userId:{type:Schema.Types.ObjectId,ref:'User'},
                    text:{type:String,required:true},
                    username:{type:String},
                    profileurl:{type:String}
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Post',postSchema);