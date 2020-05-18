import {SIGNIN_SUCCESS} from '../actions/type';

const initialState = {
    token:null,
}
export default (state=initialState,action) =>{
    const {type,payload} = action;
    switch(type){
        case SIGNIN_SUCCESS:
            localStorage.setItem('token',payload);
            return {...state,token:payload};
        default:
            return state;
    }
}