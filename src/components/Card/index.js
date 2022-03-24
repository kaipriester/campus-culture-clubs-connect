import React from 'react';
import './card.css';

const Card = ({image, title, desc, clickable, route}) => {
    return(
        <div className='card-container'>
            <div className='card-image'>
                <img src={image} alt=''/>
            </div>
            <div className='card-body'>
                <h4 className='title'> {title} </h4>
                <p className='desc'> {desc} </p>
                <div className='btn'>
                    <button>
                        <a> View More </a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card;