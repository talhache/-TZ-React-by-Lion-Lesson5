import React, { Component } from "react";

import ComList from "../components/ComList";

export default class Coms extends Component {
	render() {
		return (
			<div>{!this.props.children ? <ComList /> : this.props.children}</div>
		);
	}
}
