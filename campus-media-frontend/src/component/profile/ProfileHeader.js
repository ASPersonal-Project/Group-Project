import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, makeStyles, Typography,Box,Container,Tabs,Tab} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    profileimage:{
        position:'absolute',
        top: 190

    }

}));


const ProfileHeader = ({value}) => {
    const classes = useStyles();
    
    return (
        <Container >
            
            <Grid container justify='center'>
            <img src={require('../../images/homeback.jpg')}/>
            </Grid>
            <Grid container justify='center'>
            <img src={require('../../images/uoklogo.png')} className={classes.profileimage}/>
            </Grid>
            
            <Grid container justify='center'>
                <Typography variant="h4">Anjna Shakthi</Typography>
            </Grid>
           
          <Tabs
            variant="fullWidth"
            value={value}
            aria-label="nav tabs example"
            >
            <Tab label="TimeLine" component={Link} to="/profile"  />
            <Tab label="About" component={Link} to="/about"  />
            <Tab label="Photo" component={Link} to="/photo"  />
        </Tabs>
    
      
            
        </Container>
    )
}

export default ProfileHeader
