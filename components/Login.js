import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../styles/Login.css";
import {auth} from "../firebase";
import axios from "axios";

function Login() {
	let navigate = useNavigate();
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");

	let signIn = (e) => {
		e.preventDefault();

		// Some firebase login stuff
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					navigate("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	let register = (e) => {
		e.preventDefault();

		if (password.length < 8) {
			alert("Password must be longer than 8 Characters");
		} else {
			auth
				.createUserWithEmailAndPassword(email, password)
				.then(navigate("/"))
				.catch((err) => alert(err.message));
		}
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login-container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input type="email" onChange={(e) => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button onClick={signIn} className="login-sign-in-button">
						Sign In
					</button>
				</form>
				<p>
					By singing-in you agree to The Amazon Clone Conditions of Use & Sale,
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				<button onClick={register} className="login-register-button">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
