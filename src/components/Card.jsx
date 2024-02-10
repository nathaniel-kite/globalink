import "./Card.css"
const Card = (props) => {
    return (
    <div class="home-card card">
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{props.location}</h6>
            <p class="card-text">{props.text}</p>
            {/* <img className="card-img-top" src={props.img}></img> */}
        </div>
    </div>
    );
}
export default Card; 