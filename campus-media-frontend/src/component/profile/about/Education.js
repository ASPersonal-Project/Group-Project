import React from 'react'
import {List,ListItem,Avatar,ListItemAvatar,ListItemText, makeStyles,Typography} from '@material-ui/core';
import {School} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  nested: {
    paddingLeft: theme.spacing(10),
  },
}))

const Education = () => {
  const classes = useStyles();

  var education = [
    {header:'Department',icon:<School/>,itemtext:'Software Enginering'},
    {header:'School',icon:<School/>,itemtext:'St.Thoms collenge'},
]
    return (
      <>
        <List >
        {
          education.map((item) =>(
            <>
            <ListItem>
          <ListItemAvatar>
            <Avatar>
              {item.icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography
                component="span"
                variant="h5"
                color="textPrimary"
              >
               {item.header}
          </Typography>}/>
        </ListItem>
        <ListItem className={classes.nested}>
          <ListItemText primary={item.itemtext}/>
        </ListItem>
        </>
          ))
        }
        
        </List>
        </>
    )
}

export default Education;
