import axios from 'axios';


export const fetchOwnerProfile = () =>{
    try {
        const res = axios.post('http://localhost:5000/api/v1/profile/me')
    } catch (err) {
        const errors = res.response.date.errors;
        console.log(errors);
    }
}