import React, { useState, useEffect } from 'react';
//Home Components
import Header from './Header';

/*
    This is the My Clubs page of the application
*/

const UserLogin = () => {
    //list of providers from azure
    const providers = ['twitter'];
    const redirect = window.location.pathname;
    const [userInfo, setUserInfo] = useState();

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
    }
    return (
        <div>
            <Header />
            <div> Testing: This is the User Login Page</div>
            <div className="menu-list auth">
                {!userInfo &&
                    providers.map((provider) => (
                        <a key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}>
                            Login
                        </a>
                    ))}
                {userInfo && <a href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>Logout</a>}
            </div>
        </div>
    )
}

export default UserLogin;