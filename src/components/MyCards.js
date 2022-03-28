import React from 'react';
//Home Components
import Grid from './Grid';

import DefaultClubImage from '../images/NoClubImage.png';

/*
    This is the My Cards page of the application
*/

const Savedclubs = [
    {'title': 'saved club 1', 'desc': 'This is a description for club 1'},
    {'title': 'Awesome SWE Club', 'desc': 'SWE is very cool and awesome'},

];

const MyCards = () => {
    return(
        <div>
            <h1> My Cards </h1>
            <Grid Clubs={Savedclubs} DefaultClubImage={DefaultClubImage}/>
        </div>
    )
}

export default MyCards;