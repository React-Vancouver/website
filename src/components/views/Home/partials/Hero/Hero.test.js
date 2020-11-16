import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero';

const mockProps = {
  openNextEvent: jest.fn(),
  closeNextEvent: jest.fn(),
  event: {
    sponsors: [
      {
        id: 1,
        name: 'lorem',
      },
      {
        id: 2,
        name: 'ipsum',
      },
    ],
  },
  data: {
    title: 'foo',
    description: 'bar',
  },
  links: [],
};

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = render(<Hero {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
