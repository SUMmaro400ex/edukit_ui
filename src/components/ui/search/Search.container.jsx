import React, { Component } from 'react';
import Search from './Search.component';

export default class SearchContainer extends Component {
    state = {collapsed: true}
    onClick = collapsed => _ => this.setState({ collapsed })
    render() {
        return(<Search onClick={this.onClick} collapsed={this.state.collapsed} {...this.props}/>)
    }
}
