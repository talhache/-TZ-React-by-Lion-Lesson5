import axios from "axios";
import React, { Component } from "react";

import Com from "./Com";

export default class ComList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
		};
	}
	render() {
		if (!this.state.comments.length) {
			return null;
		}

		const comments = this.state.comments.map(comments => {
			return <Com key={comments.id} {...comments} />;
		});
		return (
			<div>
				<h1>Комментарии</h1>
				{comments}
			</div>
		);
	}

	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
      this.setState({comments: res.data})
    });
	}
}
