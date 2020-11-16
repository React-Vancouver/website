import React from 'react';
import { render } from '@testing-library/react';

import Background from './Background';

describe('Background', () => {
  it('renders correctly', () => {
    const tree = render(<Background alt="something cool" />);
    
    expect(tree).toBeTruthy();
  });
});
