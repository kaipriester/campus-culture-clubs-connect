import React from 'react';
//Home Components
import Header from './Header';
import HomeImage from './HomeImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

/*
    This is the Home page of the application
*/

const Home = () => {
    return(
        <div>
            <Header/>
            <HomeImage/>
            <SearchBar/>
            <Spinner/>
        </div>
    )
}

export default Home;