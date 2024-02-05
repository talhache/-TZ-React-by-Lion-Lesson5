import React, { Component } from "react";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";

export default class Layout extends Component {
	constructor(props) {
		super(props);

		this.brand = "React blog";
	}
	isActive() {
		return window.location.pathname === window.href;
	}

	render() {
		return (
			<>
				<Menu brand={this.brand}>
					<MenuItem href="/" active={this.isActive("/")}>
						Главная
					</MenuItem>
          <MenuItem href="posts" active={this.isActive("/posts")}>
						Посты
					</MenuItem>
          <MenuItem href="coms" active={this.isActive("/coms")}>
						Комментарии
					</MenuItem>
					<MenuItem href="users" active={this.isActive("/users")}>
						Пользователи
					</MenuItem>
				</Menu>
				<div className="container">
					<div className="row">
						<div className="col-12">{this.props.children}</div>
					</div>
				</div>
				<footer className="card-footer">&copy; 2019</footer>
			</>
		);
	}
}
