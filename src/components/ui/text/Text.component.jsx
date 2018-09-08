import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import { styles } from './Text.style';

const text = ({ classes, type, children, className }) => (
    <p className={classNames(classes.text, classes[type], className)}>{children}</p>
);

export default injectSheet(styles)(text);