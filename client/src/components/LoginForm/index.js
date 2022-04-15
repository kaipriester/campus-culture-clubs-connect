import React, { useState, useEffect, useContext } from 'react';
import './loginform.css';
//components
import {userContext} from './../../Contexts/userContext';
import logo from '../../images/4.png';

const LoginForm = () => {
    //list of providers from azure
    const providers = ['twitter'];
    const redirect = window.location.pathname;
    const {userInfo, setUserInfo} = useContext(userContext);

    //access the user login status by making a query to /.auth/me in the client
    useEffect(() => {
        (async () => {
            setUserInfo(await getUserInfo());
        })();
    }, []);

    async function getUserInfo() {
        try {
            const response = await fetch('/.auth/me');
            const payload = await response.json();
            const { clientPrincipal } = payload;
            return clientPrincipal;
        } catch (error) {
            console.error('No profile could be found');
            return undefined;
        }
    };
    
    return (
        <div className='page-back'>
            <div className="menu-list auth">
                <div className='form-left'>
                    <div className='form-left-content'>
                        <h4 className='welcome'> Welcome </h4>
                        {userInfo && (
                            <div>
                                <div className="user-info">
                                    <p>Logged in as {userInfo && userInfo.userDetails}</p>
                                    <p>through your {userInfo && userInfo.identityProvider} account</p>
                                </div>
                            </div>
                        )}
                        <div className='button-format'>
                            {!userInfo &&
                                providers.map((provider) => (
                                    <a className='but' key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}>
                                        Login
                                    </a>
                                ))}
                            {userInfo && <a className='but' href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>Logout</a>}
                        </div>
                    </div>
                </div>
                <img src={logo} className='logo' />
            </div>
        </div>
    )
}

export default LoginForm;