import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar"

import './CreateProfile.css'

const CreateProfile = () => {

	const [userInfo, setUserInfo] = useState(null);
	const [signedIn, setSignedIn] = useState(null);

	useEffect(() => {
		var info = sessionStorage.getItem("user_info");
		var signed_in = sessionStorage.getItem("signed_in");

		setUserInfo(JSON.parse(info));
		setSignedIn(signed_in);
	}, [])

	function handleSubmission() {
		const form = document.getElementById('profileForm');
			form.addEventListener('submit', (event) => {
				event.preventDefault();
			});

		let submissionData = {
			username: form.username.value,
			password: form.password.value,
			first_name: form.first_name.value,
			last_name: form.last_name.value,
			origin_country: form.origin_country.value,
			languages: [
				{
					name: form.language_1.value,
					proficiency: "Native"
				},
				{
					name: form.language_2.value,
					proficiency: form.language_2_proficiency.value,
				},
				{
					name: form.language_3.value,
					proficiency: form.language_3_proficiency.value,
				}
			],
			education: form.education.value,
			current_location: form.current_location.value,
			description: form.description.value
		}

		console.log(submissionData);

		fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json' // Specify content type as JSON
			  },
			body: JSON.stringify(submissionData)
		})

		sessionStorage.setItem("signed_in", true);
		sessionStorage.setItem("user_info", JSON.stringify(submissionData));
		sessionStorage.setItem("username", submissionData.username);

		window.location.href = "/connect";
	}

	return (
		<div style={{background: '#F0F8FF', height: '100%'}}>
			<Navbar bold_page="profile" signed_in={signedIn}></Navbar>
			<form class="default-text-create-profile" id="profileForm">
				<div class="container py-3" style={{maxWidth: '1000px'}}>
					<h1 class="px-5 py-3">Create Mentee Profile</h1>
					<div class="question-card d-flex flex-column px-5 py-3 mb-4">
						<h3 class="mb-4">Account Information</h3>
						<label for="username" class="form-label">Username</label>
						<input type="text" class="form-control mb-3" id="username" name="username"></input>
						<label for="password" class="form-label">Password</label>
						<input type="password" class="form-control mb-3" id="password" name="password"></input>
					</div>
					<div class="question-card d-flex flex-column px-5 py-3">
						<h3 class="mb-4">Personal Information</h3>

						<div class="flex-row d-flex">
							<div class="flex-column d-flex flex-fill pe-3">
								<label for="first_name" class="form-label">First Name</label>
								<input type="text" class="form-control mb-3" id="first_name" name="first_name"></input>
							</div>
							<div class="flex-column d-flex flex-fill">
								<label for="last_name" class="form-label">Last Name</label>
								<input type="text" class="form-control mb-3" id="last_name" name="last_name"></input>
							</div>
						</div>

						
						<label for="origin_country" class="form-label">Country of Origin</label>
						<input type="text" class="form-control mb-3" id="origin_country" name="origin_country"></input>
						<label for="language_1" class="form-label">Languages</label>
						<input type="text" class="form-control mb-3" id="language_1" name="language_1" placeholder="Native Language (Required)"></input>
						<div class="flex-row d-flex">
							<input type="text" class="form-control mb-3 flex-fill me-3" id="language_2" name="language_2" placeholder="Second Language (Optional)"></input>
							<select class="form-select" id="language_2_proficiency" name="language_2_proficiency" style={{maxHeight: '39px', maxWidth: '250px'}}>
									<option selected>Not Proficient</option>
									<option>Conversational</option>
									<option>Proficient</option>
									<option>Fluent</option>
									<option>Native</option>
								</select>
						</div>
						<div class="flex-row d-flex">
							<input type="text" class="form-control mb-3 flex-fill me-3" id="language_3" name="language_3" placeholder="Third Language (Optional)"></input>
							<select class="form-select" id="language_3_proficiency" name="language_3_proficiency" style={{maxHeight: '39px', maxWidth: '250px'}}>
									<option selected>Not Proficient</option>
									<option>Conversational</option>
									<option>Proficient</option>
									<option>Fluent</option>
									<option>Native</option>
								</select>
						</div>
						<label for="education" class="form-label">Education</label>
						<input type="text" class="form-control mb-3" id="education" name="education" placeholder="Your highest level of education (eg. 'B.S. Computer Science')"></input>
						<label for="current_location" class="form-label">Current Location</label>
						<input type="text" class="form-control mb-3" id="current_location" name="current_location" placeholder="(eg. Atlanta, Georgia)"></input>
						<label for="current_location" class="form-label">Description</label>
						<textarea class="form-control mb-3" id="description" name="description" placeholder="Tell us a little about yourself. What are you hoping for help with?"></textarea>
					</div>
					<div class="d-flex justify-content-center my-4">
						<button onClick={handleSubmission} class="btn btn-success default-text-create-profile">Create Profile</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateProfile;