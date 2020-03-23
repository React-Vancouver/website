import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Hero from './Hero';

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
