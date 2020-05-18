const jwt = require('jsonwebtoken');
const config = require('config');

const verification = (req,res,next) => {
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg:'No token, authorized denied'});
    }

    try {
        jwt.verify(
            token,
            config.get('jwtSecret'),
            (err, data)=>{
                if(err){
                    console.log(err.message);
                    res.status(401),json({msg:'token is not verify'});
                }
                req.userId = data.user.id;
                
                next();
            }
        )
    } catch (err) {
        res.json({msg:'token is not validate'})
    }
}

module.exports = verification;