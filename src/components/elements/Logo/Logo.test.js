import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
