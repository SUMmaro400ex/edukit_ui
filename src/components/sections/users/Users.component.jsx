import React, { useState } from "react";
import { Text, Search, UserCard } from "../../ui";
import classes from "./Users.module.scss";

const Users = ({ users }) => {
  const [filteredUsers, updateFilteredUsers] = useState(users);

  const onChange = e => {
    const regex = new RegExp(e.target.value.toLowerCase());
    const filteredUsers = users.filter(({ name }) =>
      regex.test(name.toLowerCase())
    );
    updateFilteredUsers(filteredUsers);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.heading}>
        <Search className={classes.search} onChange={onChange} />
        <Text type="heading" className={classes.title}>
          Users
        </Text>
      </div>
      <div className={classes.content}>
        <div className={classes.userCards}>
          {filteredUsers.map(user => (
            <UserCard key={Math.random()} user={user} />
          ))}
        </div>
        <div className={classes.userStats}>Stats</div>
      </div>
    </div>
  );
};

Users.defaultProps = { users: [{ name: "Jon Rose" }, { name: "Yen Rose" }] };
export default Users;
