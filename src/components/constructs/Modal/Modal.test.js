import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Modal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
