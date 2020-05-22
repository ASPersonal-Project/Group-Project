import React from 'react';
import {connect} from 'react-redux';
import {SubListItem} from './ListItem';
import {Home,LocationOn} from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const Place = ({profile}) => {
    return (
        <>
        <Typography variant="h5">Place You've lived</Typography>
         <SubListItem icon={<Home/>} primary={profile.currentcity} secondary="Current City"/>  
         <SubListItem icon={<LocationOn/>} primary={profile.hometown} secondary="Home Town"/>    
        </>
    )
}

const mapStateToProps = state =>({
    profile:state.profile.ownerProfile
  })
  

export default connect(mapStateToProps)(Place);
