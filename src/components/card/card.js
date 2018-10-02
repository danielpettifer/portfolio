import React from 'react'
import styles from './Card.css'

const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <p className="Type">{props.type}</p>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="FakeButton">Read more</div>
    </div>
)

export default Card