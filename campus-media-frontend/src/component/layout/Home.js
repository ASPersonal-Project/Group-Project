import React from 'react'
import LoginForm from '../auth/LoginForm';
import { Typography,Grid, makeStyles,Box } from '@material-ui/core';
import Backgrond from '../../images/homeback.jpg';
import Typed from 'react-typed';

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundImage: `url(${Backgrond})`,
        
        minWidth:"100%",
       
        backgroundSize:"cover",
        backgroundPosition:"center",
    },
    gridcontainer:{
        
        minHeight:"89.8vh",
        minWidth:"100%"
    },
    image:{
        width:theme.spacing(15),
        height:theme.spacing(15)
    },
    leftcontent:{
        width:350,
        textAlign:'center'
    }
    
}))

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Grid container  className={classes.gridcontainer}>
                <Grid item md={6} container justify='center' alignItems='center'>
                    <Box component="div" className={classes.leftcontent}>
                        <img src={require('../../images/uoklogo.png')} alt="logo" className={classes.image}/>
                        <Typography variant="h4">
                            <Typed
                                strings={['University of kelaniya']}
                                typeSpeed={80}
                                backSpeed={60}
                                loop
                            />
                        
                    </Typography>
                    </Box>
                    
                </Grid>
                <Grid item md={6} container justify='center' alignItems='center'>
                <LoginForm/> 
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;
