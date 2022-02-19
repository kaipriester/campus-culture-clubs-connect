import React from 'react';
import './homeimage.css';
//image
import reitzImg from '../../images/reitz-union.png';
//Reitz union image on homepage
const HomeImage = () => {
    return (
        <div className='container'>
            <img src={reitzImg} className='reitzImage'/>
            <div class="textposition">Welcome to Campus Club Culture Connect (4C)!</div>
        </div>
    )
}

export default HomeImage;
