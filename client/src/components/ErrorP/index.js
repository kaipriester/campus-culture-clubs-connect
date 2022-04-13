import React from 'react';
import './error.css';
//gator gif
import GatorGif from './../../images/RetroPixelAlbert.gif';


const ErrorP = ({text}) => {
    return(
        <div className="container">
            <img src={GatorGif} className='gatorImage'/>
            <h1> {text} </h1>
        </div>
    )
}

export default ErrorP;