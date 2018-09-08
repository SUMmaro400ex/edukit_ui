import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import { styles } from './Search.styles';

const search = ({ classes, onChange, className, collapsed, onClick }) => (
    <div className={classNames(classes.searchBox, className, {[classes.searchBoxCollapsed]: collapsed } )}>
        { collapsed
            ? <i className="fas fa-search" onClick={onClick(false)} ></i>
            : <input className={classes.input} onChange={onChange} onBlur={onClick(true)} autoFocus />
        }
    </div>
);

export default injectSheet(styles)(search);