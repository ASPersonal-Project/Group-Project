import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,Typography,Button,Box, makeStyles} from '@material-ui/core';
import {Person} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
      appbar:{
        backgroundColor:"#AF2130"
      },
      logo:{
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(1),
      },
      title: {
        flexGrow: 1,
      },
}))

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img src={require('../../images/uoklogo.png')} alt="logo" className={classes.logo}/>
          <Typography variant="h6" className={classes.title}>
            University of KELANIYA
          </Typography>
          <Button color="inherit" endIcon={<Person/>} component={Link}  to={'/'}>SignIn</Button>
          <Button color="inherit" endIcon={<Person/>} component={Link}  to={'/register'}>SignUp</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar;
