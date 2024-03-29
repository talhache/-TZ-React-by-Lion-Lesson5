import axios from "axios";
import React, { Component } from "react";
import User from "../components/User";

export default class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}

	render() {
		if (!this.state.users.length) {
			return null;
		}

		const users = this.state.users.map(user => {
			return <User key={user.id} {...user} />;
		});

		return (
			<div>
				<h1>Пользователи</h1>
				{users}
			</div>
		);
	}

	componentDidMount() {
		axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
			this.setState({ users: response.data });
		});
	}
}
