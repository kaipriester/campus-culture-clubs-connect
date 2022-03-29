import React from 'react';
//Home Components
import HomeImage from './HomeImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Grid from './Grid';

//default image for clubs
import DefaultClubImage from '../images/NoClubImage.png';

//This sections is a temporary spot for hard coded clubs
const clubs = [
    {'title': 'club 1', 'desc': 'This is a description for club 1'},
    {'title': 'club 2', 'desc': 'This is a description for club 2'},
    {'title': 'club 3', 'desc': 'This is a description for club 3'},
    {'title': 'club 4', 'desc': 'This is a description for club 4'},
    {'title': 'club 5', 'desc': 'This is a description for club 5'},
    {'title': 'club 6', 'desc': 'This is a description for club 6'},
    {'title': 'club 7', 'desc': 'This is a description for club 7'},
    {'title': 'club 8', 'desc': 'This is a description for club 8'},
    {'title': 'club 9', 'desc': 'This is a description for club 9'},
];

/*
    This is the Home page of the application
*/

const Home = () => {
    return(
        <div data-testid="Home-1">
            <HomeImage/>
            <SearchBar/>
            <Grid Clubs={clubs} DefaultClubImage={DefaultClubImage}/>
            <Spinner/>
        </div>
    )
}

export default Home;