import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Container,Tabs,Tab,Box,makeStyles } from '@material-ui/core';

import Overview from './Overview';
import Education from './Education';
import ContactAndBasic from './ContactAndBasic';
import Place from './Place';

const TabPanel = ({children,value,index}) => {

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}  
    >
      {value === index && (
        <Box p={3}>
          <Box>{children}</Box>
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
