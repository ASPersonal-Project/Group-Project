import React from 'react';
import {List,ListItemText,ListItem,Typography, makeStyles,ListItemAvatar,Avatar} from '@material-ui/core';
import {Call,Home} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    nested: {
        paddingLeft: theme.spacing(10),
      },
}))

const ContactAndBasic = () => {
    const classes = useStyles();

    var contactinfo = [
        {icon:<Call/>,textPrimary:'0712073771',textSecondary:'mobile'},
        {icon:<Home/>,textPrimary:'66/A,RubberHena',textSecondary:'address'}
    ]
    // var info = [
    //     {header:'Contact',icon:,itemtext:'Software Enginering'},
    //     {header:'School',,itemtext:'St.Thoms collenge'},
    // ]
    return (
        <List >
            <ListItem>
          <ListItemText primary={<Typography
                component="span"
                variant="h5"
                color="textPrimary"
              >
               Contact Info
          </Typography>}/>
          </ListItem>
        {
            contactinfo.map((contact)=>
            <ListItem>
            <ListItemAvatar>
              <Avatar>
                {contact.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.textPrimary} secondary={contact.textSecondary} />
          </ListItem>
        )
        }
        
        
        
         
        
        
        </List>
    )
}

export default ContactAndBasic;
