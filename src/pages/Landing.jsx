// Filename - Landing.jsx
import React from "react";
import "./Landing.css"
import { Link } from "react-router-dom"; 

const Landing = () => {
    return (
        <div>
            <h1 id="test">Welcome to <span id="bluePartHeader">GlobalLink!</span></h1>
            <div id="container1">
                <div id="description">
                    <p id="yoyoyo">Our mission is to provide immigrants with the resources 
                    they need to feel secure in the US, with a prioirty on finding they
                    need to feel secure in the US, with a prioirty on finding  employment and 
                    navigating the visa process</p>

                    <p>We offer a connective experience that seamlessly pairs immigrants
                        seeking mentorship with seasoned mentors. </p>
{/* 
                    <text>Our mission is to provide immigrants with the resources</text> 
                    <text>they need to feel secure in the US, with a prioirty on finding </text>
                    <text>employment and navigating the visa process</text> */}
                </div>
                <div id="connection_image">
                    <img src="http://tinyurl.com/cnxn-graphic" alt="connection graphic" id="graphic1"/>
                    {/* <img src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg" alt="connection"/> */}
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