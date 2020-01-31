import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(props) {
	const usernameRef = useRef();
	const passwordRef = useRef();

	let history = useHistory();
	const [error, setError] = React.useState("");

	const submit = () => {
		axios
			.post("http://localhost:3300/api/auth/login", {
				username: usernameRef.current.value,
				password: passwordRef.current.value
			})
			.then(res => {
				if (!res.data.token) {
					setError(res.data.message);
				} else {
					localStorage.setItem("token", res.data.token);
					history.push("/jokes");
				}
			})
			.catch(error => {
				// Alert a sensible message pulled from the error object
				// alert(error.message);
				setError(error.message);
			});
	};

	return (
		<div className="login">
			<h1>LOGIN</h1>
			<div className="login-inputs">
				username <input ref={usernameRef} type="text" />
				<br />
				password <input ref={passwordRef} type="text" />
			</div>

			<div>
				<button onClick={submit}>Submit</button>
			</div>

			<br />
			{error ? (
				<>
					<div style={{ color: "red" }}>{error}</div>
				</>
			) : (
				""
			)}
		</div>
	);
}
