import React from 'react';
import './header.css'; 
//images
import defUser from '../../images/default_user_icon.jpg';
import logo from '../../images/4.png';

const Header = () => {
    return(
        <nav>
            <div className='div-header'>
                
                <div style={{display: 'flex', 'flexDirection': 'row'}}>
                    <div>
                        <img src={logo} className='logo-pic' />
                    </div>
                    <div className='header-buttons'>
                        <button className='button'> Home </button>
                        <button className='button'> My Clubs </button>
                        <button className='button'> My Cards </button>
                    </div>
                </div>
                <div style={{display: 'flex', 'flexDirection': 'row'}}>
                    <div>
                        <img src={defUser} className='def-user' />
                    </div>
                    <div>
                        <button className='login-button'> Login </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;