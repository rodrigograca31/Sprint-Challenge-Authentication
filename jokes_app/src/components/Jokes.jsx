import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(props) {
	const usernameRef = useRef();
	const passwordRef = useRef();

	const [jokes, setJokes] = React.useState([]);

	axios.defaults.headers.common["Authorization"] = localStorage.getItem(
		"token"
	);

	React.useEffect(() => {
		axios
			.get("http://localhost:3300/api/jokes")

			.then(res => {
				console.log(res.data);

				setJokes(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className="login">
			<h1>JOKES</h1>
			{jokes.map(joke => (
				<div>
					<div>{joke.id}</div>
					<div>{joke.joke}</div>
				</div>
			))}
		</div>
	);
}
