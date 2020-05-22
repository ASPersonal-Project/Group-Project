import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemAvatar,Avatar,ListItemText} from '@material-ui/core';
import {School,Home,LocationOn, PhoneAndroid} from '@material-ui/icons';
import {SubListItem} from './ListItem';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

const Overview = ({profile})=> {
  
  return (
    <>
    {profile && <List>
      <SubListItem icon={<School/>} primary={profile.department} secondary="Department"/>
      <SubListItem icon={<School/>} primary={profile.school} secondary="School"/>
      <SubListItem icon={<Home/>} primary={profile.currentcity} secondary="Current city"/>
      <SubListItem icon={<LocationOn/>} primary={profile.currentcity} secondary="Home twon"/>
      <SubListItem icon={<PhoneAndroid/>} primary={profile.phonenumber} secondary="Mobile"/>
    </List>}
    </>
  );
}

const mapStateToProps = state =>({
  profile:state.profile.ownerProfile
})

export default connect(mapStateToProps)(Overview);