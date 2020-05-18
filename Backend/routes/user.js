const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('config');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { authvalidate } = require('../middleware/authValidate');

router.post('/', authvalidate('createUser'), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { username, email, password, usertype } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exist' });

        const newUser = User({
            username,
            email,
            password,
            usertype
        });

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        const payload ={
            user :{
                id: newUser._id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn : 3600},
            (err, token) => {
                if(err) throw err;
                res.json({token});
            }
        )
    } catch (err) {
        console.log(err.message);
        req.status(500).send('Server Error');
    }
    

})

module.exports = router;