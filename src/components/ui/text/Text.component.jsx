import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import { styles } from './Text.style';

const text = ({ classes, type, children, className }) => (
    <div className={classNames(classes[type], className)}>{children}</div>
);

export default injectSheet(styles)(text);