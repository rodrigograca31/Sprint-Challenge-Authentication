import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(props) {
	const usernameRef = useRef();
	const passwordRef = useRef();

	let history = useHistory();

	const submit = () => {
		axios
			.post("http://localhost:3300/api/auth/login", {
				username: usernameRef.current.value,
				password: passwordRef.current.value
			})
			.then(res => {
				// SUCCESS! Credentials are valid:
				//   1- Put the token string in local storage under a 'token' key
				localStorage.setItem("token", res.data.token);
				// localStorage.setItem('token', JSON.stringify(myArray));
				//   2- Redirect users to the /quotes route
				history.push("/jokes");
			})
			.catch(error => {
				// Alert a sensible message pulled from the error object
				// alert(error.message);
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
		</div>
	);
}
