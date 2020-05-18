import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Box,TextField,Button, makeStyles, Typography} from '@material-ui/core';
import {signIn} from '../../actions/authAction';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        borderRadius:'10px',
        textAlign:"center",
        width:300,
        height:300,
    },
    button:{
        marginTop: theme.spacing(5),
    }
}))

const LoginForm = ({signIn}) => {
    const classes = useStyles();
    const [state,setState] = useState({email:'',password:''})

    const onChange = (e) => {
        // console.log('hii');
        setState({
            ...state,[e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(state);
        signIn(state);

    }
    return (
        <>
           
                <Box component="form" className={classes.container}  p={2}>
                    <TextField  
                        label="Email" 
                        fullWidth 
                        margin='dense'
                        name="email"
                        onChange={onChange} />
                    <br/>
                    <TextField  
                        label="password" 
                        fullWidth 
                        margin='dense'
                        type="password"
                        name="password"
                        onChange={onChange} />
                    <br/>
                    <Button variant="contained" color="primary" fullWidth onClick={onSubmit} className={classes.button}>
                        Login
                    </Button>
                    <Typography variant="body2">Not register yet,<Link to="/register">Register Now</Link></Typography>
                    
                </Box>
            
        </>
    )
}

export default connect(null,{signIn})(LoginForm);
