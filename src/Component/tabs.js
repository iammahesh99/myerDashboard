import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Dashboard from '../Component/dashboard.js';
import ChartAnalysis from '../Component/ChartAnalysis';
import FavoriteIcon from '@material-ui/icons/Favorite';



export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{backgroundColor:'#E6E6FA'}}>
      <AppBar position="sticky">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
         <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="Chart Analysis" icon={<TrendingUpIcon />} {...a11yProps(1)} />
          <Tab label="other" icon={<FavoriteIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{backgroundColor:'#E6E6FA'}}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1} style={{backgroundColor:'#E6E6FA'}}>
        <ChartAnalysis />
      </TabPanel>
      <TabPanel value={value} index={2} style={{backgroundColor:'#E6E6FA'}}>
        Screen three
      </TabPanel>
    </div>
  );
}
