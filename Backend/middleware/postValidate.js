const {check} = require('express-validator');

exports.postvalidate = (method) => {
    switch(method){
        case 'addcomment':
            return [
                check('text','Please required comment').not().isEmpty()
            ]
        
        default:null
            
    }
}