const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const { authvalidate } = require('../middleware/authValidate');

router.post('/', authvalidate('logingUser'), async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()})
  

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: 'Your are not Regieter yet' });

    const pwdMatch = await bcrypt.compare(password, user.password);
    if (!pwdMatch)
      return res.status(400).json({ msg: 'Your Password is not Match' });

    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;