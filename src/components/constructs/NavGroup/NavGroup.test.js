import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import NavGroup from './NavGroup';

describe('NavGroup', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
