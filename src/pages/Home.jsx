// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Card from "./../components/Card.jsx"
import Card_Mentors from "./../components/Card_Mentors.jsx"

const Home = () => {
    return (
        <div id="home-container">
            <div id="nav">
                <h3>navbar</h3>
            </div>
            
            <div id="content-container">
                <div className="home-column col">
                    <div className="d-grid gap-3">
                        <div id="home-intro-text">
                            <h1>Welcome back, Alejandro</h1>
                            <br />
                            <h4>Here are some events you might be interested in</h4>
                        </div>
                        <div className="home-column col">
                            <Card title={"TechSummit 2024"} location={"Atlanta, GA"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
                        </div>
                        <div className="home-column col">
                            <Card title={"NCSDC 2024"} location={"Atlanta, GA"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
                        </div>
                    </div>
                </div>

                <div className="home-column col">
                        <Card_Mentors title={"Sofia Gonzalez"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={"https://s3-alpha-sig.figma.com/img/5cc3/adc4/daee830d2fc6df16c32246f999bb9e90?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WeeW5cta6-dxONgbkGBTrFtc175tbBmr9woXMr2uRjXgQlP6mqz0wfpy5YEamY7BVFUPjoIm5IeJu7sNo5JnjdslY3m0JCknRWxCTinoCu-83WjNEhPKWt19ibvfOm6qz-i0VZk3SyxwFB3uZ~f2s11QOjjZXlLIvpAPUn33xz7FV-n2vFWES3nGhKevAFZNeHnYD7qGpFHjQlfcN3eXTgZIWvrVQ1u~jEz9mxmpGX44kWH633nG~0zDGvR5cTgpsTAsIz2pbL6cgmlZERwXnurD5XrqzxOIG6QP24R2sgLrVJPN~vAb-8AvnFOMo4FLeIq8nHDcM2ucckHaDrY1VQ_"} />
                        <Card_Mentors title={"NCSDC 2024"} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={"https://s3-alpha-sig.figma.com/img/5cc3/adc4/daee830d2fc6df16c32246f999bb9e90?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WeeW5cta6-dxONgbkGBTrFtc175tbBmr9woXMr2uRjXgQlP6mqz0wfpy5YEamY7BVFUPjoIm5IeJu7sNo5JnjdslY3m0JCknRWxCTinoCu-83WjNEhPKWt19ibvfOm6qz-i0VZk3SyxwFB3uZ~f2s11QOjjZXlLIvpAPUn33xz7FV-n2vFWES3nGhKevAFZNeHnYD7qGpFHjQlfcN3eXTgZIWvrVQ1u~jEz9mxmpGX44kWH633nG~0zDGvR5cTgpsTAsIz2pbL6cgmlZERwXnurD5XrqzxOIG6QP24R2sgLrVJPN~vAb-8AvnFOMo4FLeIq8nHDcM2ucckHaDrY1VQ_"} />
                </div>

                {/* first column */}
                
                {/*  */}
            </div>
        </div>
    );
};

export default Home;