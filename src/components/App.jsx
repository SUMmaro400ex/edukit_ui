import React from "react";
import classes from "./App.module.scss";
import { Dashboard } from "./sections";

export default _ => (
  <div className={classes.appWrapper}>
    <Dashboard />
  </div>
);
