import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import { styles } from './AppSelect.style';

const appSelect = ({ classes, onClick, active }) => (
  <div className={classes.wrapper}>
    <div>
        <div onClick={onClick('users')} className={classNames(classes.iconWrapper, {[classes.active]: active === 'users'})}>
            <i className="fas fa-users"></i>
        </div>
        <div onClick={onClick('calendar')} className={classNames(classes.iconWrapper, {[classes.active]: active === 'calendar'})}>
            <i className="far fa-calendar-alt"></i>
        </div>
        <div onClick={onClick('homework')} className={classNames(classes.iconWrapper, {[classes.active]: active === 'homework'})}>
            <i className="fas fa-pen"></i>
        </div>
        <div onClick={onClick('messages')} className={classNames(classes.iconWrapper, {[classes.active]: active === 'messages'})}>
            <i className="far fa-comments"></i>
        </div>
        <div onClick={onClick('settings')} className={classNames(classes.iconWrapper, {[classes.active]: active === 'settings'})}>
            <i className="fas fa-sliders-h"></i>
        </div>
    </div>
    <div className={classes.signOut}>
        <i className="fas fa-sign-out-alt"></i>
    </div>
  </div>
);

export default injectSheet(styles)(appSelect);
