import React from 'react';
import { render } from '@testing-library/react';
import UserLogin from'./../UserLogin.js';

test('User Login page renders with no issues', () => {
    render(<UserLogin />)
})