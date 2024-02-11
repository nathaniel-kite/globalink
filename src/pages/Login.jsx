import React, {useState, useEffect} from "react";

const Login = () => {
	function handleSubmission() {
		const form = document.getElementById('loginForm');

		form.addEventListener('submit', (event) => {
			event.preventDefault();
		});

		console.log('THIS IS A TEST')
		console.log(form);

		let submissionData = {
			username: form.username.value,
			password: form.password.value
		}

		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify(submissionData)
		})
		.then(res => res.json())
		.then((data) => {

			console.log(data);

			if (data != null) {
				sessionStorage.setItem("user_info", JSON.stringify(data));
				sessionStorage.setItem("signed_in", true);
				sessionStorage.setItem("username", submissionData.username);
				alert('Welcome back, ' + submissionData.username);
				window.location.href = "/connect";
			} else {
				alert('Invalid credentials.');
			}
		});
	}

	return (
		<div className="container">
			<link href='https://fonts.googleapis.com/css?family=Plus Jakarta Sans' rel='stylesheet'></link>
			<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
			<div className="column">
				<form id="loginForm">
					<div className="form">
						<div className="form-elem">
							<h3 id="title-text">Welcome Back!</h3>
						</div>
						<div className="form-elem">
							<div className="text-field">
								<h5 id="username-text">Username</h5>
							</div>
							<input type="text" class="form-control" name="username" id="username"></input>
						</div>
						<div className="form-elem">
							<div className="text-field">
								<h5 id="username-text">Password</h5>
							</div>
							<input type="text" class="form-control" name="password" id="password"></input>
						</div>
						<button onClick={handleSubmission}>Submit</button>
					</div>
				</form>
			</div>
				<div className="column right">
					<div className="form">
						<img src={require('../assets/logo.png')}></img>
					</div>
				</div>
		</div>
	);
};

export default Login;