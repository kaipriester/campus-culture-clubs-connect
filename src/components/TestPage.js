import React, {useContext} from 'react';
import NoAccessPage from './NoAccessPage.js';
import {userContext} from './../Contexts/userContext';
import {Navigate} from 'react-router-dom';

const TestPage = () => {
    const {userInfo} = useContext(userContext)

    if(userInfo && userInfo.userRoles.includes('tester')) {
        return (
            <div> This is the Test page </div>
        )
    }
    return <Navigate to='./noaccess'/>
}
export default TestPage;