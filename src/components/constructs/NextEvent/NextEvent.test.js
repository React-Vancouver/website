import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import NextEvent from './NextEvent';

describe('NextEvent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NextEvent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
