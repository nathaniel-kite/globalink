import React from "react";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-bg sticky-top ps-4 pe-5 navbar-text">
			<div class="container-sm justify-content-start">
				<img src={require('../assets/logo.png')} alt="logo" height="75" width="75"></img>
				<a href="/" class="nav-link nav-text-big ps-3">GlobaLink</a>
			</div>
			<div class="container-fluid">
				<a class="nav-link" href="/home">Home</a> 
				<a class="nav-link" href="/chat">Chats</a>
				<a class="nav-link" href="/events">Events</a>
				<a class="nav-link" href="/connect">Connect</a>
				<div class="v-line"></div>
				<a class="nav-link" href="/">Join Now</a>
				<button class="btn btn-primary" href="/">Sign In</button>
			</div>
		</nav>
	);
};

export default Navbar;
