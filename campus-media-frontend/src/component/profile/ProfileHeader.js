import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Grid, makeStyles, Typography,Container,Tabs,Tab} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    profileimage:{
        position:'absolute',
        top: 190

    }

}));


const ProfileHeader = ({value,profile}) => {
    const classes = useStyles();
//    {profile && console.log(profile._id)}; 
    
    return (
        <Container >
            
            <Grid container justify='center'>
            <img src={require('../../images/homeback.jpg')} alt="backgourndimag"/>
            </Grid>
            <Grid container justify='center'>
            <img src={require('../../images/uoklogo.png')} alt="uoklogo" className={classes.profileimage}/>
            </Grid>
            
            <Grid container justify='center'>
                {profile && <Typography variant="h4">{profile.user.username}</Typography>}
            </Grid>
           
          <Tabs
            variant="fullWidth"
            value={value}
            aria-label="nav tabs example"
            >
            <Tab label="TimeLine" component={Link} to="/profile"  />
            <Tab label="About" component={Link} to="/about"  />
            <Tab label="Friend" component={Link} to="/friend"  />
            <Tab label="Photo" component={Link} to="/photo"  />
        </Tabs>
    
      
            
        </Container>
    )
}

const mapStateToProps = state =>({
    profile:state.profile.ownerProfile
})

export default connect(mapStateToProps)(ProfileHeader);
