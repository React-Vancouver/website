import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import ButtonWithIcon from './ButtonWithIcon';

describe('ButtonWithIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonWithIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
