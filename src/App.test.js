import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders entire app with no issues', () => {
  render(<App />);
});