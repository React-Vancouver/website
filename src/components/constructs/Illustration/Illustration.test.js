import React from 'react';
import { render } from '@testing-library/react';

import Illustration from './Illustration';

describe('Illustration', () => {
  it('renders correctly', () => {
    const tree = render(<Illustration />);
    
    expect(tree).toBeTruthy();
  });
});
