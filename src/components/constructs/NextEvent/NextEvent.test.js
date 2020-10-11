import React from 'react';
import { render } from '@testing-library/react';

import NextEvent from './NextEvent';

describe('NextEvent', () => {
  it('renders correctly', () => {
    const tree = render(<NextEvent />);
    
    expect(tree).toBeTruthy();
  });
});
