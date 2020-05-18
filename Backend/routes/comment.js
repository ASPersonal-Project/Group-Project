const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');

const auth = require('../middleware/jwtVerify');
const {postvalidate} = require('../middleware/postValidate');
const Post = require('../models/Post');
const Profile = require('../models/Profile');

router.put('/:id',postvalidate('addcomment'),auth,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()});
    try {
        const post = await Post.findById(req.params.id);
        const profile = await Profile.findOne({user:req.userId}).populate('user',['username']);

        const comment = {
            userId : req.userId,
            text : req.body.text,
            username:profile.user.username,
            profileurl:profile.profileurl,
        }
        post.comment.unshift(comment);

        await post.save();
        res.status(200).json(post);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }    
});

router.delete('/:post_id/:comment_id',auth,async (req,res) => {
    try {
        const post =await Post.findById(req.params.post_id);
        console.log(req.params.comment_id);
        const comment = post.comment.find(comment => comment.id === req.params.comment_id);

        if(!comment) return res.status(400).json({error:{msg:'Comment does not exist'}});
        if(comment.userId.toString() !== req.userId) return res.status(400).json({error:{msg:'Your not autherized'}});
        
        const removeIndex = post.comment.map(comment => comment.id.toString()).indexOf(req.params.comment_id);
        post.comment.splice(removeIndex,1);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/reply/:post_id/:comment_id',auth,async (req,res) => {
    try {
        const post = await Post.findById(req.params.post_id);
        const profile = await Profile.findOne({user:req.userId}).populate('user',['username']);
        const comment = post.comment.find(comment => comment.id === req.params.comment_id);

        const reply = {
            userId:req.userId,
            text:req.body.text,
            profileurl:profile.profileurl,
            username:profile.user.username,
        }
        comment.reply.push(reply);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/reply/:post_id/:comment_id/:reply_id',auth, async(req,res) => {
    try {
        const post = await Post.findById(req.params.post_id);
        const comment = post.comment.find(comment => comment.id === req.params.comment_id);
        console.log(comment);
        // const reply = comment.reply.find(reply => reply.id === req.params.reply_id);
        const removeIndex = comment.reply.map(reply => reply.id).indexOf(req.params.reply_id);
        comment.reply.splice(removeIndex,1);

        post.save();
        res.status(200).json(post);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
    
    
})

module.exports = router;