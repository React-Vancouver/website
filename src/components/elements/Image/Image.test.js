import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Image from './Image';

describe('Image', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Image />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
