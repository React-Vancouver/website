import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Background from './Background';

describe('Background', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Background />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
