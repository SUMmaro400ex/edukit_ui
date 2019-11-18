import React from "react";
import { AppSelect } from "../index";
import { Content } from "../index";
import classes from "./Dashboard.module.scss";

export default _ => (
  <div className={classes.app}>
    <AppSelect />
    <Content />
  </div>
);
