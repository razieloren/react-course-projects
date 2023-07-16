import starImage from '../images/star.png'

export default function Card(props) {
    let badgeType
    let badgeText
    if (props.openSpots === 0) {
        badgeType = "sold-out"
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeType = "online"
        badgeText = "Online"
    }
    return (
        <div className="card">
            { badgeText &&
                <div className={`card-badge badge-${badgeType}`}>
                    {badgeText}
                </div>
            }
            <img className="card-image" src={props.coverImg} alt={props.title}/>
            <div className="card-stats">
                <img className="card-star right-margin" src={starImage} alt="star"/>
                <span className="right-margin">{props.rating}</span>
                <span className="gray">({props.reviewCount}) |</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p><span className="bold">From {props.price}$</span> / pesron</p>
        </div>
    )
}