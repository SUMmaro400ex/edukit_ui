import React from "react";
import injectSheet from "react-jss";
import { styles } from "./UserCard.style";

const UserCard = ({ user, classes }) => <div>{user.name}</div>;

export default injectSheet(styles)(UserCard);
