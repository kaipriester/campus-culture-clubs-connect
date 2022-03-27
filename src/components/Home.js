import React from 'react';
//Home Components
import Header from './Header';
import HomeImage from './HomeImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Card from './Card';
import Grid from './Grid';

//default image for clubs
import DefaultClubImage from '../images/NoClubImage.png';
import userEvent from '@testing-library/user-event';

//This sections is a temporary spot for hard coded clubs

/*
    This is the Home page of the application
*/

const Home = () => {
    return(
        <div>
            <Header/>
            <HomeImage/>
            <SearchBar/>
            <Grid header='Clubs' DefaultClubImage={DefaultClubImage}/>
            <Spinner/>
        </div>
    )
}

export default Home;