import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Credits from './Credits';

describe('Credits', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Credits />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
