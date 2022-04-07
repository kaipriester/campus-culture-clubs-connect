import React from 'react';
//Home Components
import Grid from './Grid';
import DefaultClubImage from '../images/NoClubImage.png';
//hook for changing page
import { useNavigate } from 'react-router-dom';
/*
    This is the My Cards page of the application
*/

const Savedclubs = [
    {'title': 'saved club 1', 'desc': 'This is a description for club 1'},
    {'title': 'Awesome SWE Club', 'desc': 'SWE is very cool and awesome'},

];


const MyCards = () => {
    let navigate = useNavigate();
    return(
        <div>
            <h1> Fill out the form below to update your club </h1>
            <Grid Clubs={Savedclubs} DefaultClubImage={DefaultClubImage}/>
            <div className='myCardsButtons'>
                            <button className='button' onClick={() => { navigate("/createcard") }}> Create New Club Card </button>
                            <button className = 'button'> Add Existing Club </button>         
            </div>
            
        </div>
        //TO-DO: ADD FORM FOR CARD HERE
    )
}

export default MyCards;