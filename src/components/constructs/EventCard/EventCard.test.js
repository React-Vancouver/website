import React from 'react';
import { render } from '@testing-library/react';

import EventCard from './EventCard';

const mockTalk = {
  id: 1234,
  title: '',
  host: {
    name: 'john doe',
  },
  speaker: {
    avatar: '/test.jpg',
    firstName: 'jane',
    lastName: 'doe',
  },
};

const mockProps = {
  data: {
    talks: [mockTalk],
    date: new Date('2020 09 27'),
  },
  onClick: jest.fn(),
};

describe('EventCard', () => {
  it('renders correctly', async () => {
    const component = render(<EventCard {...mockProps} />);

    expect(component.container).toBeTruthy();
  });
  it('should render date in "MMM do, yyyy" format', async () => {
    const expectedResult = 'Sep 27th, 2020';
    const component = render(<EventCard {...mockProps} />);
    const actualResult = await component.findByText(expectedResult);

    expect(actualResult).toBeTruthy();
  });
});
