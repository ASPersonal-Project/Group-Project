const {check} = require('express-validator');

exports.profilevalidate = (method) =>{
    switch(method){
        case 'createProfile': {
            return [
              check('address','Address is required').not().isEmpty(),
              check('phonenumber', 'Phone Number is required').not().isEmpty()
            ]
        }
    }
}