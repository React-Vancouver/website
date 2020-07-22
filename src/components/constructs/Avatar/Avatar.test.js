import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
