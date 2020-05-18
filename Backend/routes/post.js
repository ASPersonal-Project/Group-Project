const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/jwtVerify');
const router = express.Router();

//!Post create
router.post('/', auth , async(req,res)=>{
    const {imageurl,text} = req.body;

    const postData = {
        imageurl,
        text,
        user : req.userId
    }
    try {
        const post = new Post(postData);
        await post.save();
        res.json(post);
    } catch (err) {
        console.log(err.message);
        res.status(500).json('Server Error');
    }
});


//!post delete
router.delete('/:postId', auth , async (req,res)=>{
    try {
        await Post.findByIdAndRemove(req.params.postId);
        res.json('Post removed');

    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
});

//!See my posts
router.get('/myPosts', auth , async (req,res)=>{
    try {
        const myPosts = await Post.find({user:req.userId});
        if(!myPosts) return res.status(200).json({msg:'Not have Post'});

        res.status(200).json(myPosts);
    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
})

//!Get all posts
router.get('/',auth, async (req,res)=>{
    try {
        const posts = await Post.find().sort({date:-1});
        res.status(200).json(posts);
    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
})

module.exports = router;