import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import users from '../data.json';

describe('Nested routes', () => {
  describe('User component', () => {
    test('displays UserProfile by default', () => {
      render(
        <MemoryRouter initialEntries={['/users/5']}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByText('Lucio_Hettinger@annie.ca')).toBeTruthy();
      expect(screen.getByText('(254)954-1289')).toBeTruthy();
      expect(screen.queryByText('non est facere')).toBeFalsy();
    });

    test('displays UserPosts when url ends with /posts', () => {
      render(
        <MemoryRouter initialEntries={['/users/3/posts']}>
          <App />
        </MemoryRouter>
      );
      expect(screen.queryByText('Nathan@yesenia.net')).toBeFalsy();
      expect(screen.queryByText('1-463-123-4447')).toBeFalsy();
      expect(screen.getByText('asperiores ea ipsam voluptatibus modi minima quia sint')).toBeTruthy();
      expect(screen.getByText('a quo magni similique perferendis')).toBeTruthy();
    });

    test('uses route URL in links', () => {
      render(
        <MemoryRouter initialEntries={['/users/5']}>
          <App />
        </MemoryRouter>
      );

     // expect(screen.getByTestId('user-profile').getAttribute('to')).toBe('/users/5');
      expect(screen.getByTestId('user-posts').getAttribute('to')).toBe('/users/5/posts');
    });
  });

  describe('UserPosts component', () => {

    test('displays UserPost when url ends with :postID', () => {
      const user = users.find(user => user.id === 4);

      render(
        <MemoryRouter initialEntries={['/users/4/posts/32']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText('Patricia Lebsack')).toBeTruthy();
      expect(screen.getByText('ullam ut quidem id aut vel consequuntur')).toBeTruthy();
      expect(screen.getByText('deserunt eos nobis asperiores et hic est debitis repellat molestiae optio nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates et aut adipisci ea maiores voluptas maxime')).toBeTruthy();
    });
  });
});
