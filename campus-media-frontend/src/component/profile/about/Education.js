import React from 'react';
import {connect} from 'react-redux';
import {List} from '@material-ui/core';
import {School} from '@material-ui/icons';
import {MainListItem,SubListItem} from './ListItem';


const Education = ({profile}) => {
  
    return (
      <>
        <List >
          <MainListItem header="Department"/>
          <SubListItem icon={<School/>} primary={profile.department} secondary="Deparmemt"/>
        </List>
        <List >
          <MainListItem header="School"/>
          <SubListItem icon={<School/>} primary={profile.school} secondary="School"/>
        </List>

        </>
    )
}

const mapStateToProps = state => ({
  profile: state.profile.ownerProfile
})

export default connect(mapStateToProps)(Education);
