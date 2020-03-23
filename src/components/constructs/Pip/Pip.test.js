import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Pip from './Pip';

describe('Pip', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Pip />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
