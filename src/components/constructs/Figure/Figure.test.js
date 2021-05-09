import React from 'react';
import { render } from '@testing-library/react';

import Figure from './Figure';

describe('Figure', () => {
  it('renders correctly', () => {
    const tree = render(<Figure />);
    
    expect(tree).toBeTruthy();
  });
});
