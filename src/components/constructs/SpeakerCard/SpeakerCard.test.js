import React from 'react';
import { render } from '@testing-library/react';

import SpeakerCard from './SpeakerCard';

const mockTalk = {
  id: 123,
  title: 'Lorem Ipsum Dolor',
  event: {
    date: new Date('2020 09 27'),
  },
};

const mockProps = {
  onClick: jest.fn(),
  data: {
    title: 'senior engineer',
    firstName: 'Jane',
    lastName: 'Doe',
    company: {
      name: 'contoso',
    },
    talks: [mockTalk],
  },
};

describe('SpeakerCard', () => {
  it('renders correctly', () => {
    const component = render(<SpeakerCard {...mockProps} />);

    expect(component).toBeTruthy();
  });

  it('should render the date in "MMM do, yyyy" format', async () => {
    const expectedResult = 'Sep 27th, 2020';
    const component = render(<SpeakerCard {...mockProps} />);
    const actualResult = component.findByText(expectedResult);

    expect(actualResult).toBeTruthy();
  });
});
