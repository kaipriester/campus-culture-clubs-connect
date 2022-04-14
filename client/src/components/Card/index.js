import React, {useContext} from 'react';
import {clubContext} from './../../Contexts/clubContext';
import './card.css';
import Axios from 'axios';

//TO-DO: ADD ALL FEATURES OF THE FORM
//ADD A FAVORITE BUTTON
const Card = ({image, title, desc, clickable, route}) => {

    const {savedClubs} = useContext(clubContext);
    const {setSavedClubs} = useContext(clubContext);

    //taking in params title and desc to add to the database
    const addFriend = (ctitle, cdesc) => {
        Axios.post('http://localhost:3001/addfriend', {
        title: ctitle,
        desc: cdesc
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
                    <button className='left-btn' onClick={addFriend(title, desc)}>
                        <a> Add Club </a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card;