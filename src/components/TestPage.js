import React, {useContext} from 'react';
import NoAccessPage from './NoAccessPage.js';
import {userContext} from './../Contexts/userContext';

const TestPage = () => {
    const {userInfo} = useContext(userContext)

    if(userInfo && userInfo.userRoles.includes('tester')) {
        return (
            <div> This is the Test page </div>
        )
    }
    return (
        <NoAccessPage/>
    )
}
export default TestPage;