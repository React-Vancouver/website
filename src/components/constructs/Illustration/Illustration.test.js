import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Illustration from './Illustration';

describe('Illustration', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Illustration />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
