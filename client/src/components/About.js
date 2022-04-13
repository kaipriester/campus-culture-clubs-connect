import React from 'react';
import './about.css';
//components
import logo from '../images/4.png';

const About = () => {
    return(
        <div>
            <div className='page-bg'>
                <div className= 'content-box'>
                <img src={logo} alt="logo with branches surrounding text that says 4c campus connect" className='logo' />
                    
                    <div className='about-content'>
                        <h1>About</h1>
                        <br />
                        <p>Hello UF Students!</p>
                        <br />
                        <p>Welcome to Campus Club Culture Connect or 4C. This webapp is a central location to explore
                        student culture clubs on the University of Florida (UF) campus. With the shift to online course work, it has become more difficult for students 
                        to make meaningful connections when moving to campus. Also, online environments have amplified cultural discrimination. 
                        Cultural clubs are a great way to nurture welcoming communities for all students. 4C is a way for students to 
                        find clubs and show them how to get involved in an effective and safe way during the pandemic by utilizing online 
                        platforms (Slack, Discord, Groupme…).</p>
                        <br />
                        <h2>How to get involved!</h2>
                        <p>It is super simple to get started with 4C. Go over to the Home page and you can search through all the available clubs. Clubs will have their important 
                        information posted on their card. If you would like to save your favorite clubs for next time, login using your twitter account (no extra passwords!) and 
                        you’ll be able to view your favorites under the My Clubs page. 
                        If you are a club officer and would like to have your club posted on 4C, please email us to request for an officer account. Once your request is approved, 
                        you’ll be able to access the Edit Club page and fill out a club card. You may login at any time and edit the card so that your information is always up-to-date.</p>
                        <br />
                        <h2>About the developers!</h2>
                        <p>Tam Huynh, Kai Priester, Xingyan Liang, and Brian Guida developed this webapp for the UF Introduction to Software Engineering (CEN3031) final group project. </p>
                        <br />
                        <h2>Contact: </h2>
                        <a href= "mailto:4cwebapp@gmail.com"> 4cwebapp@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;