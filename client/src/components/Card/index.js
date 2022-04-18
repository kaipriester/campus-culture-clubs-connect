import React, {useContext} from 'react';
import {clubContext} from './../../Contexts/clubContext';
import './card.css';
import Axios from 'axios';

const Card = ({image, title, desc, clickable, route}) => {
    //taking in params title and desc to add to the database
    const addClub = (ctitle, cdesc) => {
        Axios.post('http://localhost:3001/addclub', {
        title: "Temp Title",
        desc: 'Temporary Description"'
        })
    }

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
                    <button className='left-btn'>
                        <a> Add Club </a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card;