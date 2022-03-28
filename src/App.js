import logo from './logo.svg';
import './App.css';
//components
import Header from './components/Header';
import Home from './components/Home.js';  // Home Page
import MyClubs from './components/MyClubs.js';
import MyCards from './components/MyCards.js';
import UserLogin from './components/UserLogin.js';
//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Testing
//Testing2



function App() {
  return (
    <Router className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myclubs" element={<MyClubs />} />
        <Route path="/mycards" element={<MyCards />} />
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
