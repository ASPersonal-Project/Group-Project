import React from 'react';
import {connect} from 'react-redux';
import {List, makeStyles} from '@material-ui/core';
import {School} from '@material-ui/icons';
import {MainListItem,SubListItem} from './ListItem';

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}))


const Education = ({profile}) => {

const classes = useStyles();
  
    return (
      <>
        <List className={classes.root}>
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
