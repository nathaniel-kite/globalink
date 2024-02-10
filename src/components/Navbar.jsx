import React from "react";

import "./Navbar.css";

// bold_page: should be: "home", "chats", "events", "connect", or "none"
// signed_in: whether or not the user is currently signed in (boolean)
// profile_pic: if the user is signed in, URI to their profile pic, otherwise null
const Navbar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-bg sticky-top ps-3 pe-4 navbar-text">
			<div class="container-sm justify-content-start">
				<img src={require('../assets/logo.png')} alt="logo" height="45" width="45" class="my-1"></img>
				<a href="/" class="nav-link ps-3 pt-1"><span style={{fontSize: "28px", fontWeight: 550}}>GlobaLink</span></a>
			</div>
			<div class="container-fluid">
				<a class="nav-link" href="/home" style={props.bold_page === 'home' ? {fontWeight:550} : {}}>Home</a> 
				<a class="nav-link" href="/chat" style={props.bold_page === 'chats' ? {fontWeight:550} : {}}>Chats</a>
				<a class="nav-link" href="/events" style={props.bold_page === 'events' ? {fontWeight:550} : {}}>Events</a>
				<a class="nav-link" href="/connect" style={props.bold_page === 'connect' ? {fontWeight:550} : {}}>Connect</a>
				<div class="v-line"></div>
				{props.signed_in == "true"
					? <a class="nav-link" href="/">My Profile</a>
					: <a class="nav-link" href="/">Join Now</a>
				}
				{props.signed_in == "true"
					? <img src={props.profile_pic} alt="profile" height="40" width="40"></img>
					: <a class="nav-link" href="/" style={{fontWeight: 550}}>Sign In</a>
				}
			</div>
		</nav>
	);
};

export default Navbar;
