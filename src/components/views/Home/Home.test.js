import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

const mockProps = {
  closeNextEvent: jest.fn(),
  creditsData: [],
  currentEventData: {
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
  eventsData: [],
  heroData: {
    title: 'foo',
    description: 'bar',
    image: {
      alt: 'something cool',
    },
  },
  navLinks: [],
  setTrayOpen: jest.fn(),
  speakersData: [],
  sponsorsData: [],
  statsData: [],
};

describe('Home', () => {
  it('renders correctly', () => {
    const tree = render(<Home {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
