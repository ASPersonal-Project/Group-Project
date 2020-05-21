import axios from 'axios';
import {FETCH_OWNERPROFILE} from './type';


export const fetchOwnerProfile = () => async dispatch =>{
    console.log('hiee');
    try {
        const res =await axios.get('http://localhost:5000/api/v1/profile/me');
        console.log(res.data);
        dispatch({
            type: FETCH_OWNERPROFILE,
            payload:res.data
        })
    } catch (err) {
        const errors = err.response.data.error;
        console.log(errors);
    }
}