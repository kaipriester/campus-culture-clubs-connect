import React from 'react';
import { render } from '@testing-library/react';
import Home from'./../Home.js';

test('Home Renders with no issues', () => {
    render(<Home />)
})