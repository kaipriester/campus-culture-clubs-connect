import React from 'react';
import { render } from '@testing-library/react';
import MyClubs from'./../MyClubs.js';

test('My Clubs page Renders with no issues', () => {
    render(<MyClubs />)
})