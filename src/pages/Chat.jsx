// Chat.jsx

import React from "react";
import Navbar from "../components/Navbar"

const Chat = () => {
	return (
		<div>
			<Navbar bold_page="chats" signed_in="true"></Navbar>
			<h1>This is the chats page.</h1>
			<p>Sphinx of black quartz, judge my vow.</p>
		</div>
	);
};

export default Chat;
