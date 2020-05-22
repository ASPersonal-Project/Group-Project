import { FETCH_OWNERPROFILE} from '../actions/type';

const intialSatate = {
    ownerProfile: null
}


export default (state=intialSatate,action) => {
    const {type,payload} = action;
    
    switch(type){
        case FETCH_OWNERPROFILE:
            return {...state,ownerProfile:payload};
        default:
            return state;
    }
}