import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('landing on a bad page shows 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/some/bad/route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('404 Not Found');
  });

  test('routes for /, /about, /contact', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome to the home page')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/about/i));
    expect(screen.getByText('You are on the about page')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/contact/i));
    expect(screen.getByText('Please feel free to email us')).toBeInTheDocument();
  });
});
