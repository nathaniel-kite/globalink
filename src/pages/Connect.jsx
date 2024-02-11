import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar"
import MentorDisplay from "../components/MentorDisplay";

const Connect = () => {

	var default_state = {
		list: [],
		data_received: false
	}

	const [mentors, setMentors] = useState(default_state);

	useEffect(() => {
		fetch("api/get-all-mentors")
			.then(res => res.json())
			.then(data => setMentors({
				list: data.mentors,
				data_received: true
			}));
	}, [])

	return (
		<div style={{background: '#F0F8FF', height: '100%'}}>
			<Navbar bold_page="connect" signed_in="false"></Navbar>
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