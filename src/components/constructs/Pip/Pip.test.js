import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Pip from './Pip';

const mockProps = {
  i: 0,
  size: 'medium',
  color: 'PRIMARY',
  isActive: false,
  withNumber: false,
  onClick: jest.fn(),
  background: 'light',
};

describe('Pip', () => {
  it('renders correctly', () => {
    const tree = render(<Pip {...mockProps} />);
    
    expect(tree).toBeTruthy();
  });
});
