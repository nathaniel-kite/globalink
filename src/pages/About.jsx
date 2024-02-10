// About.jsx

import React from "react";
import Navbar from "../components/Navbar"

const About = () => {
	return (
		<div>
			<Navbar bold_page="home" signed_in="true"></Navbar>
			<h1>This is the about page.</h1>
			<p>Sphinx of black quartz, judge my vow.</p>
		</div>
	);
};

export default About;
