const express = require('express');
const router = express.Router();
const  {validationResult} = require('express-validator');

const {profilevalidate} = require('../middleware/profileValidate');
const auth = require('../middleware/jwtVerify');
const Profile = require('../models/Profile');

//!Create the profile
router.post('/',profilevalidate('createProfile'),auth,async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const person ={
        user:req.userId,
        ...req.body
    }
    try {
        let profile = await Profile.findOne({user:req.userId})
        if(profile){
            return res.json('Already You have a profile');
        }
        profile = new Profile(person);

        await profile.save()

        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
    
})

//!get profile
router.get('/me', auth, async (req,res)=> {
    try {
        const profile = await Profile.findOne({user:req.userId});
        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
})

//!Edit profile
router.put('/', auth , async (req,res)=> {
    try {
        const {username,address,description,phonenumber} =  req.body;

        let profile = await Profile.findOne({user:req.userId}).select("-password -email ");
        profile.username = username;
        profile.address = address;
        profile.description=description;
        profile.phonenumber= phonenumber;

        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
})

//!Change profile picture
router.put('/update-profilepicture', auth , async (req, res)=>{
    try {
        const {url} =  req.body;

        let profile = await Profile.findOne({user:req.userId}).select("profilepictureurl");
        profile.profilepictureurl = url

        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
})

//!Delete profile
router.delete('/', auth , async(req, res)=> {
    try {
        await Profile.findOneAndRemove({user:req.userId});

        res.json('Profile romoved');
    } catch (err) {
        console.log(err.message);
        res.json('Server error');
    }
})


//!Get all profiles
router.get('/', async (req,res) => {
    try {
        const profiles = await Profile.find();
        if(!profiles){
            res.json('No profiles');
        }
        res.json(profiles)
    } catch (error) {
        console.log(err.message);
        res.json('Server error');
    }
})


//!Get profile by id
router.get('/:id' , async (req, res)=> {
    try {
        const profile = await Profile.findById(req.params.id);
        if(profile === null){
            return res.status(401).json('No Profile')
        }
        res.json(profile);
    } catch (err) {
        if(err.kind === 'ObjectId'){
            return res.status(400).json({msg:'Profile not found'});
        }
        console.log(err.message);
        res.json('Server error')
    }
})
module.exports = router