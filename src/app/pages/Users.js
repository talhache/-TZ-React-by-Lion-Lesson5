import React, { Component } from "react";
import UserList from "../components/UsersList";

export default class Users extends Component {
	render() {
		return (
			<div>{!this.props.children ? <UserList /> : this.props.children}</div>
		);
	}
}
