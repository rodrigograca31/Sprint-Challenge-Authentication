import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Jokes from "./components/Jokes";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/jokes">
						<Jokes />
					</Route>
					<Route path="/">
						<Register />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
