import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar"
import MentorDisplay from "../components/MentorDisplay";

const Connect = () => {

	var default_state = {
		list: [],
		data_received: false
	}

	const [mentors, setMentors] = useState(default_state);
	const [userInfo, setUserInfo] = useState(null);
	const [signedIn, setSignedIn] = useState(null);

	useEffect(() => {

		var info = sessionStorage.getItem("user_info");
		var signed_in = sessionStorage.getItem("signed_in");

		console.log(info)

		setUserInfo(info);
		setSignedIn(signed_in);

		console.log('test')

		/*
		fetch("api/get-all-mentors")
			.then(res => res.json())
			.then(data => setMentors({
				list: data.mentors,
				data_received: true
			}));
		*/

		if (signed_in) {

			/*console.log('test 1');

			fetch('api/get-selected-mentors', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json' // Specify content type as JSON
				  },
				body: JSON.stringify(info)
			})
			.then(res => res.json())
			.then(data => setMentors({
				list: data,
				data_received: true
			}));*/

		
			fetch("api/get-all-mentors")
				.then(res => res.json())
				.then(data => setMentors({
					list: data.mentors,
					data_received: true
				}));

		} else {
			fetch("api/get-all-mentors")
				.then(res => res.json())
				.then(data => setMentors({
					list: data.mentors,
					data_received: true
				}));
		}
		
	}, [])

	return (
		<div style={{background: '#F0F8FF', height: '100%'}}>
			<Navbar bold_page="connect" signed_in={signedIn}></Navbar>
			<div class="container py-3" style={{maxWidth: '1000px'}}>
				<h1 class='px-3'>Your Mentor Recommendations</h1>
				{mentors.data_received && 
					mentors.list.map((mentor) => (
						<MentorDisplay name={mentor.name}
							origin_country={mentor.origin_country}
							current_role={mentor.current_role}
							description={mentor.description}
							languages={mentor.languages}
							current_location={mentor.current_location}
							skills={mentor.skills}
							profile_pic={mentor.profile_pic}>
						</MentorDisplay>
					))
				}
			</div>
		</div>
	);
};

export default Connect;