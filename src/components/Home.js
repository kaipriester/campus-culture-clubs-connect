import React from 'react';
//Home Components
import HomeImage from './HomeImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Grid from './Grid';

//default image for clubs
import DefaultClubImage from '../images/NoClubImage.png';

import { BrowserRouter } from 'react-router-dom';
//This sections is a temporary spot for hard coded clubs

/*
    This is the Home page of the application
*/

const Home = () => {
    return(
        <div data-testid="Home-1">
            <HomeImage/>
            <SearchBar/>
            <Grid header='Clubs' DefaultClubImage={DefaultClubImage}/>
            <Spinner/>
        </div>
    )
}

export default Home;