import React from 'react'
import {Card,CardContent,Typography,CardActions,Button,makeStyles,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import {Inbox,Drafts,Edit} from '@material-ui/icons';

const useStyles = makeStyles(()=>({
    root: {
        maxWidth: 400,
      },
}))

const IntroCard = () => {
    const classes = useStyles();
    return (
        <div>
           <Card className={classes.root}>
      <CardContent>
        {/* <Typography  color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
        <List component="nav" aria-label="main mailbox folders">
        <ListItem >
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="University of Kelaniya" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="St.Thomas' College,Matara" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="St.Thomas' College,Matara" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="St.Thomas' College,Matara" />
        </ListItem>
      </List>
      </CardContent>
      <CardActions>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        className={classes.button}
        endIcon={<Edit/>}
      >
        Edit Details
      </Button>
      </CardActions>
    </Card> 
        </div>
    )
}

export default IntroCard
