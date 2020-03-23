import React from 'react';
import renderer from 'react-test-renderer';
// import { render } from "@testing-library/react"

import SEO from './SEO';

describe('SEO', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SEO />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
