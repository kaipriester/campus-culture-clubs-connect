import React, { useContext} from 'react';
//Home Components
import './myclubs.css';

import {userContext} from './../Contexts/userContext';
import {clubContext} from './../Contexts/clubContext';
import {Navigate} from 'react-router-dom';
import Axios from 'axios';

const MyClubs = () => {

    const {userInfo} = useContext(userContext)
    const {savedClubs} = useContext(clubContext)
    const {setSavedClubs} = useContext(clubContext)


    // SECTION TO BE OMITTED FOR LOCAL TESTInG
    if (!userInfo) {
        return <Navigate to='./../userlogin'/>
    }
    //END OF SECTION

    const deleteClub = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)

        //Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
          //setSavedClubs(savedClubs.filter((val)=> {
            //return val._id != id;
          //}))
        //})
    }

    // Add onClick={deleteClub(club._id)} into code for database functionality

    return(
        <div className="SavedContainer">
            <h3> My Favorite Clubs: </h3>
            <div className='SavedContent'>
                {savedClubs.map((club) => 
                    <div className="rCardContainer">
                        <div className="rcard-body">
                            <h4 classname="rTitle">{club.title}</h4>
                            <p className='rDesc'>{club.desc}</p>
                        </div>
                        <div className='btn'>
                            <button>View More</button>
                            <button className='rRight-btn'>Remove</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyClubs;