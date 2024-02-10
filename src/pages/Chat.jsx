// Chat.jsx

import React from "react";
import Navbar from "../components/Navbar"
import "./../assets/sofia.png"
import "./Chat.css"

const Chat = () => {
	return (
		<div>
			<Navbar bold_page="chats" signed_in="true"></Navbar>
            <div class="container bg-success-subtle">
                <text>overall container</text>
                <div class="row">
                    <text>div holding my columns</text>
                    <div id="chatMenu" class="col-4 border-end border-3 border-black">
                        <text>1st column</text>

                        <div class="input-group mb-3 border border-black rounded">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">🔍</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search Messages..." aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        <div class="chatOverview row border rounded border-black">
                            <div class="col-3 headshotDiv">
                                {/* insert image here */}
                                <img class='headshot' src={require("./../assets/sofia.png")} alt="Sofia Headshot" />
                            </div>
                            <div class="col-8 tempFix">
                                <text class="text-left"><span class="fs-3">Sofia Gonzalez </span> 
                                <span class="text-white">.....</span><span class="fs-6">Dec 6</span></text>
                                <br></br>
                                <text class="msgText">You: Yes, that would work! What day and time would you like? </text>
                            </div>
                        </div>

                        <div id="markusChat" class="chatOverview row rounded border border-black">
                            <div class="col-3 headshotDiv">
                                {/* insert image here */}
                                <img class='headshot' src={require("./../assets/markus.png")} alt="Markus Headshot" />
                            </div>
                            <div class="col-8 tempFix">
                                <text class="text-left"><span class="fs-3">Markus Wagner</span> 
                                <span class="text-white">....</span><span class="fs-6">Dec 1</span></text>
                                <br></br>
                                <text class="msgText">Happy to help. Good luck with your interview! </text>
                            </div>
                        </div>

                    </div>
                    <div id="chatInterface" class="col-7"> 
                        <text>2nd columns</text>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Chat;
