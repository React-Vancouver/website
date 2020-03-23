import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import EventCard from './EventCard';

describe('EventCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EventCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
