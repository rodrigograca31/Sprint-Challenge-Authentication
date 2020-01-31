import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register(props) {
	const usernameRef = useRef();
	const passwordRef = useRef();

	let history = useHistory();
	const [error, setError] = React.useState("");

	const submit = () => {
		axios
			.post("http://localhost:3300/api/auth/register", {
				username: usernameRef.current.value,
				password: passwordRef.current.value
			})
			.then(res => {
				history.push("/login");
			})
			.catch(error => {
				// Alert a sensible message pulled from the error object
				// alert(error.message);
				setError(error.message);
			});
	};

	return (
		<div className="register">
			<h1>REGISTER</h1>
			<div className="register-inputs">
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
