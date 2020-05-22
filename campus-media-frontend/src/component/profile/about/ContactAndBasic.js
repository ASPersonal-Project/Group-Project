import React from 'react';
import {connect} from 'react-redux';
import {List} from '@material-ui/core';
import {Call,Home,Cake,Wc} from '@material-ui/icons';
import {SubListItem,MainListItem} from './ListItem';

const ContactAndBasic = ({profile}) => {
    return (
      <>
        <List >
          <MainListItem header="Contact Info"/>
          <SubListItem icon={<Call/>} primary={profile.phonenumber} secondary="Mobile"/>
          <SubListItem icon={<Home/>} primary={profile.address} secondary="address"/>
        </List>

        <List >
          <MainListItem header="Basic Info"/>
          <SubListItem icon={<Cake/>} primary={profile.birthday} secondary="Birthday"/>
          <SubListItem icon={<Wc/>} primary={profile.gender} secondary="Gender"/>
        </List>
        </>
    )
}

const mapStateToProps = state => ({
  profile: state.profile.ownerProfile
})
export default connect(mapStateToProps)(ContactAndBasic);
