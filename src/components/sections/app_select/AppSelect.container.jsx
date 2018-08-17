import React, { Component } from 'react';
import AppSelect from './AppSelect.component';

export default class AppSelectContainer extends Component {
    state = { active: 'users'};
    onClick = active => _ => {
        this.setState({ active })
    }
    render() {
        return(
            <AppSelect onClick={this.onClick} active={this.state.active} />
        )
    }
}
