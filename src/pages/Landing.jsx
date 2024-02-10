// Filename - Landing.jsx
import React from "react";
import "./Landing.css"
import { Link } from "react-router-dom"; 
import "./../assets/connection.png"
import "./../assets/Nikolas.png"
import "./../assets/Maria.png"
import Navbar from "./../components/Navbar.jsx"

const Landing = () => {
    return (
        <div > 
            <Navbar bold_page="none" signed_in="false"></Navbar>
            <div id="topContainer" class="d-flex flex-row mb-2 justify-content-center container mt-3">
                <div id="leftPartTop" class="p-4 d-flex flex-column">
                    <h1 id="test">Welcome to <span id="bluePartHeader">GlobalLink!</span></h1>
                    <p>Our mission is to provide immigrants with the resources they need to feel secure in the US, with a priority on <span class="fw-bold">finding 
                    employment </span> and <span class="fw-bold">navigating the visa process</span></p>

                    <p>We offer a <span class="fw-bold">connective experience</span> that seamlessly pairs immigrants 
                    <span class="fw-bold"> seeking mentorship</span> with <span class="fw-bold">seasoned mentors.</span> </p>
                    
                    <div class="d-flex flex-row" id="buttonContainer">
                        <button id="findMentorButton" type="button" class="btn btn-success">Find Your Mentor ⟶</button>
                        <button id="becomeMentorButton" type="button" class="btn btn-success">Become a Mentor ⟶</button>
                    </div>
                    <p><span class="fst-italic">Already have an account?</span> <span  class="text-decoration-underline">Sign In</span>  </p>
                </div>
                <div id="rightPartTop" class="p-2"> 
                    <img src={require("./../assets/connection.png")}alt="connection graphic" id="graphic1"/>
                </div>
            </div> {/*first half container ending*/}

            <div id="blueDiv">
                <div id="testimonials" class="container justify-content-center">
                    <h3 id='testimonialHeader'>User Testimonials</h3>
                        
                    <div class="testimonialCard"> 
                        <div class="leftHalfOfTestimonialBox">
                            <img class='testimonialPicture' src={require("./../assets/Nikolas.png")} alt="Nikolas Headshot" />
                            {/* <p class="whiteText" id="smallSpacer">This is spacing</p> */}
                            <h1 class="testimonialName"> Nikolas </h1>
                            <h1 class="testimonialName"> Ivanova </h1>
                        </div>
                        <div class="largeQuoteOne">
                            <p class="largeQuote">"</p>
                        </div>
                        <div class="rightHalfOfTestimonialBox">
                            <p><span class="whiteText">.....   </span>Coming from Russia, I knew nobody in the United States I was not used 
                                to how the job search works here, and I was looking for some guidance.
                                One of my family friends suggested To try GlobaLink, so I made an 
                                account and was connected with some mentors.</p>

                            <p> <span class="whiteText">.....   </span>Immediately, Vladmir stood out to me because I saw he also
                                speaks Russian, and comes from a very similar background as me. 
                                So far, he has helped me feel less alone in the immigration process,
                                introduced me to several industrial connections, and become a friend.
                            </p>
                        </div>
                        <div class="largeQuoteTwo">
                            <p class="largeQuote">"</p>
                        </div>
                    </div>

                    <br></br>

                    <div class="testimonialCard"> 
                        <div class="leftHalfOfTestimonialBox">
                            <img class='testimonialPicture' src={require("./../assets/Maria.png")} alt="Maria Headshot" />
                            {/* <p class="whiteText" id="smallSpacer">This is spacing</p> */}
                            <h1 class="testimonialName"> Maria </h1>
                            <h1 class="testimonialName"> Rodriguez </h1>
                        </div>
                        <div class="largeQuoteOne">
                            <p class="largeQuote">"</p>
                        </div>
                        <div class="rightHalfOfTestimonialBox">
                            <p><span class="whiteText">.....   </span> I can't express enough gratitude for the invaluable support I received
                                during my immigration journey. As an immigrant navigating the 
                                complexities of the visa process, I often felt overwhelmed and 
                                uncertain about the next steps.
                            </p>

                            <p> <span class="whiteText">.....   </span>My mentor, Sarah, provided personalized guidance tailored to my specific
                                visa and situation. She not only de-mystified the visa application
                                process but also offerred insights into the cultural nuances and 
                                expectations in the job market. Sarah's experience as an immigrant
                                herself made her advice relatable and comforting, assuring me that I
                                wasn't alone in this journey.
                            </p>
                        </div>
                        <div class="largeQuoteTwo">
                            <p class="largeQuote">"</p>
                        </div>
                    </div>
                    {/* I know this is terrible front-end code Im sorry Im sorry  */}
                    <br></br>
                    <br></br>


                </div>
            </div>
 





            <div>
                <h1>Text-based nav-bar</h1>
                <br />
                <ul>
                    <li>
                        {/* Endpoint to route to Home component */}
                        <Link to="/">Landing</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to About component */}
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to Contact Us component */}
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </div>

            
        </div>
    );
};
 
export default Landing;