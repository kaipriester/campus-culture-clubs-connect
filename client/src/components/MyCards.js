import React, {useContext} from 'react';
//Home Components
import Grid from './Grid';
import DefaultClubImage from '../images/NoClubImage.png';
//hook for changing page
import { useNavigate, Navigate } from 'react-router-dom';
import {userContext} from './../Contexts/userContext';

/*
    This is the My Cards page of the application
*/



const MyCards = () => {
    let navigate = useNavigate();

    const {userInfo} = useContext(userContext);

    if (!userInfo) {
        return <Navigate to='./../userlogin'/>
    }

    return(
        <div>
            <h1> Fill out the form below to update your club </h1>
            <div className='myCardsButtons'>
                            <button className='button' onClick={() => { navigate("/createcard") }}> Create New Club Card </button>        
            </div>
            
        </div>
    )
}

export default MyCards;