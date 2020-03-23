import React from 'react';
import renderer from 'react-test-renderer';
// import { render } from "@testing-library/react"

import Shell from './Shell';

describe('Shell', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Shell />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
