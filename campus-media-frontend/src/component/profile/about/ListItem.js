import React from 'react';
import {ListItemText,ListItem,ListItemAvatar,Avatar,Typography} from '@material-ui/core';



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
    return (
        <ListItem>
            <ListItemAvatar>
              <Avatar>
                {icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
    )
}


