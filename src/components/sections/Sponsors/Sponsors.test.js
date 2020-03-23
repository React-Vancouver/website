import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Sponsors from './Sponsors';

describe('Sponsors', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Sponsors />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
