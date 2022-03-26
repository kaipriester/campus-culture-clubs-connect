import React from 'react';
//Home Components
import Header from './Header';
import LoginForm from './LoginForm';

/*
    This is the My Clubs page of the application
*/

const UserLogin = () => {
    return(
        <div>
            <Header />
            <LoginForm />
        </div>
    )
}

export default UserLogin;