import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
