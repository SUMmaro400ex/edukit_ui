import React from 'react';
import injectSheet from 'react-jss'
import { Text } from '../../ui';
import { styles } from './Users.style';

const users = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.heading}>
      <Text type="heading" className={classes.title}>Users</Text>
      <input className={classes.searchBox}/>
    </div>
  </div>
);

export default injectSheet(styles)(users);
