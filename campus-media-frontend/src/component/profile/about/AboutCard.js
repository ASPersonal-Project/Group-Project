import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Container,Tabs,Tab,Box,makeStyles,List } from '@material-ui/core';
import Overview from './Overview';
import Education from './Education';
import ContactAndBasic from './ContactAndBasic';
import Place from './Place';

const TabPanel = ({children,value,index}) => {
  const classes = useStyles();

  return (
    
    <div
      className={classes.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}  
    >
      {value === index && (
        <Box p={3}>
          <List component="nav" aria-label="main mailbox folders">
            {children}
            </List>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabpanel:{
    width:500
  }
}));

const AboutCard = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Overview"   />
        <Tab label="Education" />
        <Tab label="Place You are Living"  />
        <Tab label="Contact and Info"  />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Overview/>      
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Education/>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Place/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ContactAndBasic/>
      </TabPanel>
    </div>
    </Container>
  );
};

export default AboutCard;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const classes = useStyles();
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       className={classes.tabpanel}
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
//   tabpanel:{
//     width: "100"
//   }
// }));

// export default function AboutCard() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//         <Tab label="Item Four" {...a11yProps(3)} />
//         <Tab label="Item Five" {...a11yProps(4)} />
//         <Tab label="Item Six" {...a11yProps(5)} />
//         <Tab label="Item Seven" {...a11yProps(6)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         Item One skkkkl  iisdfsij f ojijdfoi fsjiojiosdfi
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </div>
//   );
// }
