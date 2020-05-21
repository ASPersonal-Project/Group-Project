import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemAvatar,Avatar,ListItemText} from '@material-ui/core';
import {School,Home,LocationOn, PhoneAndroid} from '@material-ui/icons';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

const Overview = ()=> {
  // const classes = useStyles();

  return (
    <List >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <School />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Department of Software Engineering" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <School />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ST.Thoms' Bodys College" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Home/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lives in Matara" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOn/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="From Kamburugamuwa,Sri Lanka" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneAndroid/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="o71 20856978" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}


export default Overview;