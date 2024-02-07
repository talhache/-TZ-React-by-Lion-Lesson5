import React, { Component } from "react";
import { Link } from "react-router";

export default class Com extends Component {
	render() {
		const { name, email, body } = this.props;
		return (
			<div className="card border-secondary mb-3">
				<div className="card-header">
					<Link to={`/coms/${this.props.id}`}>{name}</Link>
				</div>
				<div className="card-body text-secondary">
					<p>{email}</p>
					<p> {body}</p>
				</div>
			</div>
		);
	}
}
