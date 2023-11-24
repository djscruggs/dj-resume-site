import { render, screen } from '@testing-library/react';
import Home from '../pages/index'; // Import the component to test

test('renders homepage', () => {
  render(<Home />); // Render the component

  // Use Next.js Testing Library queries to assert expected content
  expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument();
});
