import React, { Component } from "react";
import injectSheet from "react-jss";
import { Text, Search, UserCard } from "../../ui";
import { styles } from "./Users.style";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users
    };
  }
  onChange = e => {
    const regex = new RegExp(e.target.value.toLowerCase());
    const users = this.props.users.filter(({ name }) =>
      regex.test(name.toLowerCase())
    );
    this.setState({ users });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.heading}>
          <Search className={classes.search} onChange={this.onChange} />
          <Text type="heading" className={classes.title}>
            Users
          </Text>
        </div>
        <div className={classes.content}>
          <div className={classes.userCards}>
            {this.state.users.map(user => (
              <UserCard key={Math.random()} user={user} />
            ))}
          </div>
          <div className={classes.userStats}>Stats</div>
        </div>
      </div>
    );
  }
}

Users.defaultProps = { users: [{ name: "Jon Rose" }, { name: "Yen Rose" }] };
export default injectSheet(styles)(Users);
