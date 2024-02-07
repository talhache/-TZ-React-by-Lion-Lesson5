import axios from 'axios';
import React, { Component } from 'react';

import ComCard from "../components/Com";

export default class Com extends Component {
  constructor(props) {
    super(props);

    this.state = {
      com: null
    }
  }
  render() {
    return (
      <div>{this.state.com && <ComCard {...this.state.com}/>}</div>
    )
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.postId}`).then(res => {
      const data = res.data;
      this.setState({com: data})
    })
  }
}
