import React from 'react';
import injectSheet from 'react-jss';
import { AppSelect } from '../index';
import { Content } from '../index';
import { styles } from './Dashboard.style';

const dashboard = ({ classes }) => (
  <div className={classes.app}>
    <AppSelect />
    <Content />
  </div>
);

export default injectSheet(styles)(dashboard);
