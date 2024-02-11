// Chat.jsx

import React from "react";
import Navbar from "../components/Navbar";
import "./Chat.css";
import { Link } from "react-router-dom";

const DateFormat = new Intl.DateTimeFormat('en-US', { month: 'long' })

const formatDate = (unixTime) => {
	const date = new Date(unixTime);
	return `${DateFormat.format(unixTime).substring(0,3)} ${date.getDay()}`
}

const formatTime = (unixTime) => {
	const date = new Date(unixTime);
	let timeOfDay = "AM";
	let hours = date.getHours();
	
	if (hours > 12) {
		timeOfDay = "PM";
		hours -= 12;
	}
	return `${hours}:${date.getMinutes()} ${timeOfDay}`
}

const chats = [
	{
		"src":"/hi.png",
		"link":"/",
		"chatName": "Sofia Gonzalez",
		"chatDate": Date.now(),
		"latestMessage": "Yes, that would work! What day and time would you like?",
		"you": true
	},
	{
		"src":"/hi.png",
		"link":"/",
		"chatName": "Markus Wagner",
		"chatDate": Date.now(),
		"latestMessage": "Happy to help. Good luck with your interview!",
		"you": false
	},
	{
		"src":"/hi.png",
		"link":"/",
		"chatName": "Sofia Gonzalez",
		"chatDate": Date.now(),
		"latestMessage": "Yes, that would work! What day and time would you like?",
		"you": true
	},
	{
		"src":"/hi.png",
		"link":"/",
		"chatName": "Markus Wagner",
		"chatDate": Date.now(),
		"latestMessage": "Happy to help. Good luck with your interview!",
		"you": false
	},
	{
		"src":"/hi.png",
		"link":"/",
		"chatName": "Sofia Gonzalez",
		"chatDate": Date.now(),
		"latestMessage": "Yes, that would work! What day and time would you like?",
		"you": true
	},
	{
		"src":"/hi.png",
		"link":"/",
		"chatName": "Markus Wagner",
		"chatDate": Date.now(),
		"latestMessage": "Happy to help. Good luck with your interview!",
		"you": false
	}
]

const messages = [
	{
		"src":"/hi.png", 
		"sender":"Sofia Gonzalez", 
		"time": Date.now(), 
		"content":`Hey Alejandro! It's great to meet you!
		I would love to give you some additional insight about
		Microsoft and working in the US in general. Would you
		like to schedule a Zoom meeting?`
	},
	{
		"src":"/hi.png", 
		"sender":"Alejandro Diaz", 
		"time": Date.now(), 
		"content":`Yes, that would work! What day and time would you
		like?`
	},
	{
		"src":"/hi.png", 
		"sender":"Sofia Gonzalez", 
		"time": Date.now(), 
		"content":`Hey Alejandro! It's great to meet you!
		I would love to give you some additional insight about
		Microsoft and working in the US in general. Would you
		like to schedule a Zoom meeting?`
	},
	{
		"src":"/hi.png", 
		"sender":"Alejandro Diaz", 
		"time": Date.now(), 
		"content":`Yes, that would work! What day and time would you
		like?`
	},
	{
		"src":"/hi.png", 
		"sender":"Sofia Gonzalez", 
		"time": Date.now(), 
		"content":`Hey Alejandro! It's great to meet you!
		I would love to give you some additional insight about
		Microsoft and working in the US in general. Would you
		like to schedule a Zoom meeting?`
	},
	{
		"src":"/hi.png", 
		"sender":"Alejandro Diaz", 
		"time": Date.now(), 
		"content":`Yes, that would work! What day and time would you
		like?`
	}
]

const Chat = () => {
	return (
		<div>
			<Navbar bold_page="chats" signed_in="true"></Navbar>
			<div className="chatContainer">
				<ChatAside/>
				<MainChatContainer src={"/"} activeRecipient={"Sofia Gonzalez"}/> 
			</div>
		</div>
	);
};

const ChatAside = () => {
	return (
		<div className="chatAside">
			<div className="searchBar">
				<input type="text" className="searchBarInput" placeholder="🔍Search Messages"/>
			</div>
			<div className="buttonsContainer">
				{
					chats.map((chatItem, index) => {
							return (
								<ChatButton chatItem={chatItem} key={"chat " + index}/>
							);
						}
					)
				}
			</div>
	</div>
	);
}

const ChatButton = ({ chatItem: {src, link, chatName, chatDate, latestMessage, you} }) => {
	return (
		<Link className="chatButton" to={link}>
			<div className="chatImage">
				{/* <img src={src} alt={`chat pic for ${chatName}`} className={"bigChatImage"} style={{"borderRadius":"10px", "border":"2px solid black"}} /> */}
				<div style={{"width":"90px", "height":"90px", "border":"1px solid black", "borderRadius":"90px"}}> </div>
			</div>
			<div className="chatButtonContent">
				<div className="chatButtonInfo">
					<div>{chatName}</div>
					<div>{formatDate(chatDate)}</div>
				</div>
				<div className="chatButtonMsg">{you ? "You: " : ""}{latestMessage}</div>
			</div>
		</Link>
	);
}

const MainChatContainer = ({ src, activeRecipient, chats }) => {
	return (
		<div className="mainChat">
			<div className="chatHeader">
				<div className="activeChatImage">
					{/* <img src={src} alt={Portrait of {activeRecipient}}} className="smallChatImage"/> */}
				</div>
				<div className="activeChatTitle">{activeRecipient}</div>
			</div>
			<div className="messageContainer">
				{
					messages.map((message, index) => {
							return (
								<IndividualChat fromMe={message.sender != activeRecipient ? true : false} message={message} key={`Message ${index + 1} of this chat`}/>
							);
						}
					)
				}
			</div>
			<div className="newMsgContainer">
				<div>
					<textarea type="text" placeholder={"Venn my favorite little kitten"} maxLength={300}/>
				</div>
				<div>
					<button>Send</button>
				</div>
			</div>
		</div>
	);
}

const IndividualChat = ({ fromMe, message: { src, sender, time, content } }) => {
	return (
		<div className={fromMe ? "rightChat" : "leftChat"}>
			<div className="chat shadow">
				<div className="messageHeader">
					<div className="activeChatImage">
						{/* <img src={src} alt={Portrait of {sender}}} className="smallChatImage"/> */}
					</div>
					<div style={{"margin":"0px 5px 0px 0px"}}>{sender}</div>
					<div style={{"margin":"0px 5px", "color":"gray"}}>•</div>
					<div style={{"margin":"0px 5px", "color":"gray"}}>{formatTime(time)}</div>
				</div>
				<div className="messageContent">
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
}

export default Chat;