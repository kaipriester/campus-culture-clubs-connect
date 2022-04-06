import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//components
import Header from './components/Header';
import Home from './components/Home.js';  // Home Page
import MyClubs from './components/MyClubs.js';
import MyCards from './components/MyCards.js';
import UserLogin from './components/UserLogin.js';
import ErrorPage from './components/ErrorPage.js';
//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {userContext} from './Contexts/userContext';
// function requireAuth(nextState, replace, next) {
//   if (!authenticated) {
//     replace({
//       pathname: "/userlogin",
//       state: {nextPathname: nextState.location.pathname}
//     });
//   }
//   next();
// }

function App() {
  //const [auth] = useState;
  const [userInfo, setUserInfo] = useState();

  return (
    <userContext.Provider value={{userInfo, setUserInfo}}>
      <Router className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myclubs" element={<MyClubs/> }/>
          <Route path="/mycards" element={<MyCards/>}/>
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
