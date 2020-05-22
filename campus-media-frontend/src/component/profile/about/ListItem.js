import React from 'react';
import {ListItemText,ListItem,ListItemAvatar,Avatar,Typography,ListItemSecondaryAction,IconButton, makeStyles} from '@material-ui/core';
import {Delete,Edit} from '@material-ui/icons';
import PopupItem from './PopupItem';

const useStyles = makeStyles((theme)=>({
  iconbutton:{
    marginRight:theme.spacing(2)
  }
}))


export const MainListItem = ({header}) => {
  return(
  <ListItem>
    <ListItemText 
      primary={
        <Typography component="span" variant="h5" color="textPrimary">
          {header}
        </Typography>
      }/>
  </ListItem>
  )
}


export const SubListItem = ({icon,primary,secondary}) => {
  const classes = useStyles();
    return (
        <ListItem button>
            <ListItemAvatar>
              <Avatar>
                {icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
            <ListItemSecondaryAction >
              <PopupItem/>
            </ListItemSecondaryAction>
          </ListItem>
    )
}

export const OverviewListItem = ({icon,primary,secondary}) => {
  return(
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  )
}

