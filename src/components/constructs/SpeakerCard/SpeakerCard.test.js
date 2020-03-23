import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import SpeakerCard from './SpeakerCard';

describe('SpeakerCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SpeakerCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
