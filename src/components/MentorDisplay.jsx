import React from "react";

import "./MentorDisplay.css";

const MentorDisplay = (props) => {
	return (
		<div class="container mentor-display my-4 mentor-text-default">
			<div class="flex-row vertical-align-center d-flex py-3">
				<div class="d-flex justify-content-center px-5 my-auto">
					<img src={require('../assets/' + props.profile_pic)} width="175" height="175"></img>
				</div>
				<div class="flex-fill pt-2">
					<h2>{props.name}</h2>
					<div class="d-flex flex-column">
						<div class="flex-row d-flex align-center">
							<img src={require('../assets/globe_icon.png')} width="30" height="30"></img>
							<p class="ps-2 less-margin"><span style={{fontWeight: 600}}>From:</span> {props.origin_country}</p>
						</div>
						<div class="flex-row d-flex align-center">
							<img src={require('../assets/languages_icon.png')} width="30" height="30"></img>
							<p class="ps-2 less-margin"><span style={{fontWeight: 600}}>Languages:</span> {props.languages.map((language) => <span class="skill-box">{language.name} ({language.proficiency})</span>)}</p>
						</div>
						<div class="flex-row d-flex align-center">
							<img src={require('../assets/location_icon.png')} width="30" height="30"></img>
							<p class="ps-2 less-margin"><span style={{fontWeight: 600}}>Current Location:</span> {props.current_location}</p>
						</div>
						<div class="flex-row d-flex align-center">
							<img src={require('../assets/work_icon.png')} width="30" height="30"></img>
							<p class="ps-2 less-margin"><span style={{fontWeight: 600}}>Current Role:</span> {props.current_role}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-5">
				<p>{props.description}</p>
				<p style={{fontWeight: 625}}>Skills:</p>
				<p>{props.skills.map((skill) => <span class="skill-box">{skill}</span>)}</p>
				{console.log(props)}
			</div>
		</div>
	);
};

export default MentorDisplay;