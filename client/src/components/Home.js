import React, {useState} from 'react';
//Home Components
import HomeImage from './HomeImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Grid from './Grid';
import Card from './Card';

import './home.css';
import Axios from 'axios';

//default image for clubs
import DefaultClubImage from '../images/NoClubImage.png';

/*
    This is the Home page of the application
*/
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


const Home = () => {
    const [club, setClub] = useState("")
    const [desc, setDesc] = useState("")

    const addClub = () => {
        Axios.post('http://localhost:3001/addclub', {
        title: club,
        desc: desc
        })
    };


    return(
        <div data-testid="Home-1">
            <HomeImage/>
            <SearchBar/>
            <Grid 
                Clubs={clubs}
                Header= {<h1> Clubs </h1>}
                DefaultClubImage={DefaultClubImage}
            />
            <div className='input-container'>
                <div className="inputs">
                    <input className="input-field" type="text" placeholder='Club Name...' onChange={(event) => {
                        setClub(event.target.value)
                    }}/>
                    <input className="input-field" type="text" placeholder='Club Description...' onChange={(event) => {
                        setDesc(event.target.value)
                    }}/>
                    <button onClick={addClub}> Add Club To Saved List</button>
                </div>
            </div>
        </div>
    )
}

export default Home;