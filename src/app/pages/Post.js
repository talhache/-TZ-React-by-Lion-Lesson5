import axios from "axios";
import React, { Component } from "react";

import PostCard from "../components/Post";

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: null,
		};
	}
	render() {
		return <div>{this.state.post && <PostCard {...this.state.post} />}</div>;
	}
	componentDidMount() {
		axios.get(
			`https://jsonplaceholder.typicode.com/posts/${this.props.params.userId}`
		).then(res => {
      const data = res.data;
      this.setState({post: data})
    });
	}
}
