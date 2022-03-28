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


function requireAuth(nextState, replace, next) {
  if (!authenticated) {
    replace({
      pathname: "/userlogin",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}

function App() {
  //const [auth] = useState;
  return (
    <Router className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myclubs" element={<MyClubs/> } onEnter={requireAuth}/>
        <Route path="/mycards" element={<MyCards/>} onEnter={requireAuth}/>
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
