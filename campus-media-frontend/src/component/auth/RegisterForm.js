import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Grid,Box,TextField,Button, makeStyles, Typography,Checkbox,FormControlLabel,FormGroup} from '@material-ui/core';
import {signUp} from '../../actions/authAction';
import Backgrond from '../../images/homeback.jpg'

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundImage: `url(${Backgrond})`,
        minWidth:"100%",
        backgroundSize:"cover",
        backgroundPosition:"center",
        minHeight:"89.8vh",
        
    },
    registerform:{
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        borderRadius:'10px',
        padding:10,
        textAlign:'center',
        position:'absolute',
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
    },
}))

const RegisterForm = ({signUp}) => {
    const classes = useStyles();
    const [state,setState] = useState({username:'',email:'',password:'',usertype:''})

    const onChange = (e) => {
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        signUp(state);
    }
    return (

      <Box className={classes.container}>
          <Grid container>
                <Box className={classes.registerform}>
                    <Typography variant="h4">SignUp</Typography>
                    <TextField 
                        size="small" 
                        label="UserName" 
                        fullWidth 
                        variant="outlined" 
                        margin="dense"
                        name="username"
                        onChange={onChange}/>
                    <br/>
                    <TextField 
                        size="small" 
                        label="Email" 
                        fullWidth 
                        variant="outlined" 
                        margin="dense"
                        type="email"
                        name="email"
                        onChange={onChange}/>
                    <br/>
                    <TextField 
                        size="small" 
                        label="Password" 
                        fullWidth 
                        variant="outlined" 
                        margin="dense"
                        type="password"
                        name="password"
                        onChange={onChange}/>
                    <br/>
                    <FormGroup row >
                        <Grid>
                       
                        <FormControlLabel
                            control={<Checkbox value="student" name="usertype" onChange={onChange} color="primary"/>}
                            label="Student"
                        />
                        <FormControlLabel
                            control={<Checkbox value="lecturer" name="usertype" onChange={onChange} color="primary"/>}
                            label="Lecturer"
                        />
                        <FormControlLabel
                            control={<Checkbox value="demo" name="usertype" onChange={onChange} color="primary"/>}
                            label="Demo"
                        />
                        
                        </Grid>
                    </FormGroup>
                    <Button variant="contained" fullWidth color="primary" onClick={onSubmit}>
                        Register
                    </Button>
                    <Typography variant="caption">if You are Register.<Link to="/">Login</Link></Typography>

                    </Box>
                </Grid>
                </Box>
    )
}

export default connect(null,{signUp})(RegisterForm);
