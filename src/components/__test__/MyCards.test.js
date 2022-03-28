import React from 'react';
import { render } from '@testing-library/react';
import MyCards from'./../MyCards.js';

test('My Cards page Renders with no issues', () => {
    render(<MyCards />)
})