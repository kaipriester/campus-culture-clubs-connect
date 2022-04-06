import React from 'react';
//Home Components
import Grid from './Grid';

import DefaultClubImage from '../images/NoClubImage.png';

//TO-DO: CHANGE THIS TO USER'S SAVED CLUBS
const clubs = [
    {'title': 'saved club 1', 'desc': 'This is a description for club 1'},
    {'title': 'saved club 5', 'desc': 'This is a description for club 2'},
    {'title': 'saved club 9', 'desc': 'This is a description for club 3'},
];

const MyClubs = () => {
    return(
        <div>
            <h1 className='title'> My Favorite Club</h1>
            <Grid Clubs={clubs} DefaultClubImage={DefaultClubImage}/>
        </div>

    )
}

export default MyClubs;