import React from "react";
import classNames from "classnames";
import classes from "./Search.module.scss";

export default ({ onChange, className, collapsed, onClick }) => (
  <div
    className={classNames(classes.searchBox, className, {
      [classes.searchBoxCollapsed]: collapsed
    })}
  >
    {collapsed ? (
      <i className="fas fa-search" onClick={onClick(false)}></i>
    ) : (
      <input
        className={classes.input}
        onChange={onChange}
        onBlur={onClick(true)}
        autoFocus
      />
    )}
  </div>
);
