import React from "react";
import Navbar from "../components/Navbar"

import './CreateProfile.css'

const CreateProfile = () => {

	return (
		<div style={{background: '#F0F8FF', height: '100%'}}>
			<Navbar bold_page="profile" signed_in="false"></Navbar>
			<form action="/api/create-profile" method="post" class="default-text-create-profile">
				<div class="container py-3" style={{maxWidth: '1000px'}}>
					<h1 class="px-5 py-3">Create Mentee Profile</h1>
					<div class="question-card d-flex flex-column px-5 py-3 mb-4">
						<h3 class="mb-4">Account Information</h3>
						<label for="country" class="form-label">Username</label>
						<input type="text" class="form-control mb-3" id="username" name="username"></input>
						<label for="country" class="form-label">Password</label>
						<input type="password" class="form-control mb-3" id="password" name="password"></input>
					</div>
					<div class="question-card d-flex flex-column px-5 py-3">
						<h3 class="mb-4">Personal Information</h3>
						<label for="country" class="form-label">Name</label>
						<input type="text" class="form-control mb-3" id="name" name="name"></input>
						<label for="country" class="form-label">Country of Origin</label>
						<input type="text" class="form-control mb-3" id="origin_country" name="origin_country"></input>
						<label for="country" class="form-label">Languages</label>
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
						<label for="current-location" class="form-label">Current Location</label>
						<input type="text" class="form-control mb-3" id="education" name="education" placeholder="(eg. Atlanta, Georgia)"></input>
						<label for="current-location" class="form-label">Description</label>
						<textarea class="form-control mb-3" id="education" name="description" placeholder="Tell us a little about yourself. What are you hoping for help with?"></textarea>
					</div>
					<div class='d-flex justify-content-center my-4'>
						<button class='btn btn-success default-text-create-profile'>Create Profile</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateProfile;