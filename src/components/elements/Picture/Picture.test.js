import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Picture from './Picture';

describe('Picture', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Picture />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
