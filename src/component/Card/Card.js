import React from 'react';
import './Card.css'
const Card = (props) => {
    const { _id, profile, price, name, email, phone, picture, rating } = props.site;
    return (
        <div className='Card-Style'>
            <img className='Card-img' src={picture} alt="" />
            <div className='Card-Details'>
                <h1>Spot Name: {name}</h1>
                <h3>Profile Name: {profile}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Cost: {price}</p>
                <p>Personal Rating:{rating} </p>

            </div>
        </div>
    );
};

export default Card;