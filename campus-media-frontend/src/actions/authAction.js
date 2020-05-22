import axios from 'axios';
import {SIGNIN_SUCCESS} from './type';


export const signIn = (data,history) =>async dispatch  =>{
    console.log(data);
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify(data);
    try {
        const res = await axios.post('http://localhost:5000/api/v1/auth/',body,config);
        const token = res.data.token;
        localStorage.setItem('token',token);
        axios.defaults.headers.common['x-auth-token'] = token;
        history.push('/profile');
        dispatch({
            type:SIGNIN_SUCCESS,
            payload: res.data.token
        })
    } catch (error) {
        // const errors = error.response.data.error;
        // console.log(errors);
        console.log(error);
    }
}

export const signUp = (body) =>async dispatch =>{
    console.log(body);
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const res = await axios.post('http://localhost:5000/api/v1/user/',body,config);
        const token = res.data.token;
        localStorage.setItem('token',token);
        axios.defaults.headers.common['x-auth-token'] = token;
        console.log(res.data);
    } catch (error) {
        const errors = error.response.data.error;
        console.log(errors);
    }

}