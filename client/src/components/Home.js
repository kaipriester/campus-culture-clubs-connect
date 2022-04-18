import React, {useState, useContext} from 'react';
//Home Components
import HomeImage from './HomeImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Grid from './Grid';

import './home.css';
import Axios from 'axios';

//default image for clubs
import DefaultClubImage from '../images/NoClubImage.png';
import {clubContext} from './../Contexts/clubContext';

/*
    This is the Home page of the application
*/
const clubs = [
    {'title': 'SASE', 'desc': ' Description for SASE'},
    {'title': 'Swim Organization', 'desc': 'Description for Swim Org'},
    {'title': 'Tree Planting', 'desc': 'Description for Tree Planting'},
    {'title': 'Cooking Org', 'desc': 'Description for Cooking Org'},
    {'title': 'Origami Org', 'desc': 'Description for Origami Org'},
    {'title': 'Acting Org', 'desc': 'Description for Acting Org'},
    {'title': 'Bee Keeping', 'desc': 'Description for Bee Keeping Club'},
    {'title': 'Penguin Club', 'desc': 'Description for Penguin Club'},
];


const Home = () => { 
    const [club, setClub] = useState("")
    const [desc, setDesc] = useState("")

    const {savedClubs} = useContext(clubContext)
    const {setSavedClubs} = useContext(clubContext)

    //Change add button on click to this function for database functionality
    const addClub = () => {
        Axios.post('http://localhost:3001/addclub', {
        title: club,
        desc: desc
        }).then(() => {
            setSavedClubs([...savedClubs, {title: club, desc: desc}])
        })
    };

    //Change on click function to this function for live demo
    const liveAddClub = () => {
        setSavedClubs([...savedClubs, {title: club, desc: desc}])
    }

    return(
        <div data-testid="Home-1">
            <HomeImage/>
            <SearchBar/>
            <Grid 
                Clubs={clubs}
                Header= {<h1> Clubs </h1>}
                DefaultClubImage={DefaultClubImage}
            />
            <h3 className='input-title'> Save Clubs Here </h3>
            <div className='input-container'>
                <div className="inputs">
                    <input className="input-field" type="text" placeholder='Club Name...' onChange={(event) => {
                        setClub(event.target.value)
                    }}/>
                    <input className="input-field" type="text" placeholder='Club Description...' onChange={(event) => {
                        setDesc(event.target.value)
                    }}/>
                    <button onClick={liveAddClub}> Add Club To Saved List</button>
                </div>
            </div>
        </div>
    )
}

export default Home;