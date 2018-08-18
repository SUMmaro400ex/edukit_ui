import React, { Component } from 'react';
import { Users } from '../index';

export default class ContentContainer extends Component {
    state = { active: 'users'};
    render() {
        return({users: <Users />}[this.state.active])
    }
}
