import React, { useContext} from 'react';
//Home Components
import './myclubs.css';

import DefaultClubImage from '../images/NoClubImage.png';

import {userContext} from './../Contexts/userContext';
import {clubContext} from './../Contexts/clubContext';
import {Navigate} from 'react-router-dom';
import Axios from 'axios';

import Card from './Card';

//TO-DO: CHANGE THIS TO USER'S SAVED CLUBS
const clubs = [
    {'title': 'saved club 1', 'desc': 'This is a description for club 1'},
    {'title': 'saved club 5', 'desc': 'This is a description for club 2'},
    {'title': 'saved club 9', 'desc': 'This is a description for club 3'},
];

const MyClubs = () => {

    const {userInfo} = useContext(userContext)
    const {savedClubs} = useContext(clubContext)
    const {setSavedClubs} = useContext(clubContext)

    //if (!userInfo) {
        //return <Navigate to='./../userlogin'/>
    //}

    const deleteClub = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
          setSavedClubs(savedClubs.filter((val)=> {
            return val._id != id;
          }))
        })
      }

    //add different Grid implementation

    return(
        <div>
            <h1 className='title'> My Favorite Club:</h1>
            <div className='container'>
                <div className='content'> 
                    {
                        savedClubs ? 
                        savedClubs.map((club) => 
                        <div>
                            <Card 
                                image={DefaultClubImage} 
                                title={club.title}
                                desc={club.desc}
                            />
                            <button onClick={deleteClub(club._id)}>remove</button>
                        </div>
                        )
                        : <h1>There are no saved clubs...</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default MyClubs;