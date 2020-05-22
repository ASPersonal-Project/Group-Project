import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemAvatar,Avatar,ListItemText,IconButton,ListItemSecondaryAction,ButtonGroup} from '@material-ui/core';
import {School,Home,LocationOn, PhoneAndroid,Delete} from '@material-ui/icons';
import {OverviewListItem} from './ListItem';


const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}))

const Overview = ({profile})=> {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    {profile && <List component="nav" aria-label="main mailbox folders">
      <OverviewListItem icon={<School/>} primary={profile.department} secondary="Department"/>
      <OverviewListItem icon={<School/>} primary={profile.school} secondary="School"/>
      <OverviewListItem icon={<Home/>} primary={profile.currentcity} secondary="Current city"/>
      <OverviewListItem icon={<LocationOn/>} primary={profile.currentcity} secondary="Home twon"/>
      <OverviewListItem icon={<PhoneAndroid/>} primary={profile.phonenumber} secondary="Mobile"/>
      
    </List>}
    </div>
  );
}

const mapStateToProps = state =>({
  profile:state.profile.ownerProfile
})

export default connect(mapStateToProps)(Overview);