import React from 'react';
import injectSheet from 'react-jss'
import { styles } from './App.style';
import { Dashboard } from './sections';

const app = ({ classes }) => (
  <div className={classes.appWrapper}>
    <Dashboard />
  </div>
);

export default injectSheet(styles)(app);
