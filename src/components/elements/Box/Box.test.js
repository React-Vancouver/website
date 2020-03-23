import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Box from './Box';

describe('Box', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Box />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
