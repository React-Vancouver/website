import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Stat from './Stat';

describe('Stat', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Stat />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
