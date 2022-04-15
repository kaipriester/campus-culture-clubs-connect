import './App.css';
import React, { useState, useEffect } from 'react';
//components
import Header from './components/Header';
import Home from './components/Home.js';  // Home Page
import MyClubs from './components/MyClubs.js';
import MyCards from './components/MyCards.js';
import Card from './components/Card';
import CreateCard from './components/CreateCard.js';
import UserLogin from './components/UserLogin.js';
import About from './components/About.js';
import ErrorPage from './components/ErrorPage.js';
import NoAccessPage from './components/NoAccessPage.js';
//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {userContext} from './Contexts/userContext';
import {clubContext} from './Contexts/clubContext';
import Axios from 'axios';
import DefaultImage from './images/NoClubImage.png';



function App() {
  //const [auth] = useState;
  const [userInfo, setUserInfo] = useState();
  const [savedClubs, setSavedClubs] = useState([]);


  //automatically get saved club data from database
  useEffect(() => {
    Axios.get('http://localhost:3001/read', {}).then((response) => {
      setSavedClubs(response.data)
    }).catch('did not work');
  }, [])


  return (
    <userContext.Provider value={{userInfo, setUserInfo}}>
      <clubContext.Provider value={{savedClubs, setSavedClubs}}>
        <Router className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myclubs" element={<MyClubs/> }/>
            <Route path="/mycards" element={<MyCards/>}/>
            <Route path="/createcard" element={<CreateCard/>} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/about" element={<About />} />
            <Route path="/noaccess" element={<NoAccessPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </clubContext.Provider>
    </userContext.Provider>
  );
}

export default App;

