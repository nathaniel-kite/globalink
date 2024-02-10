import "./Card_Mentors.css"

const Card_Mentors = (props) => {
    // Ment for the individual mentors on the mentor card on the right side of the page
    return (
        <div className="home-card card">
            {/* Allows for the positioning of the image to the left as a flex column */}
            <div className="mentor-card-img">
                <img className="card-img-top" src={props.img} style={{borderRadius: "50%", height: "4rem", width: "4rem"}}></img>
            </div>
            <div className="mentor-card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default Card_Mentors;