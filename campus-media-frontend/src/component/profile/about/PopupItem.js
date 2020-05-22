import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {IconButton,List,ListItem,ListItemText,ListItemSecondaryAction, makeStyles} from '@material-ui/core';
import { MoreHoriz,Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
}))

const PopupItem = () => {
    const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <IconButton aria-label="delete" {...bindTrigger(popupState)}>
            <  MoreHoriz/>
            </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box>
            <List component="nav" aria-label="main mailbox folders" className={classes.root}>
                <ListItem button>
                <ListItemText primary="Edit some Thing" />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Edit />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem button>
                <ListItemText primary="dlelete some Thing" />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default PopupItem;