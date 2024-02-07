import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./app/layouts/Layout";
import Main from "./app/pages/Main";
import PageNotFound from "./app/pages/PageNotFound";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import Posts from "./app/pages/Posts";
import Post from "./app/pages/Post";
import Coms from "./app/pages/Coms";
import Com from "./app/pages/Com";

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main} />
			<Route path="posts" component={Posts}>
				<Route path=":userId" component={Post} />
			</Route>
			<Route path="coms" component={Coms}>
				<Route path=":postId" component={Com} />
			</Route>
			<Route path="users" component={Users}>
				<Route path=":userId" component={User} />
			</Route>
			<Route path="*" component={PageNotFound} />
		</Route>
	</Router>,
	document.querySelector("#root"),
);
