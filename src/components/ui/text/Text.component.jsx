import React from "react";
import classNames from "classnames";
import classes from "./Text.module.scss";

export default ({ type, children, className }) => (
  <p className={classNames(classes.text, classes[type], className)}>
    {children}
  </p>
);
