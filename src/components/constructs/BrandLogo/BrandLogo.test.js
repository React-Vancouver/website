import React from 'react';
import { render } from '@testing-library/react';

import BrandLogo from './BrandLogo';

describe('BrandLogo', () => {
  it('renders correctly', () => {
    const tree = render(<BrandLogo />);
    
    expect(tree).toBeTruthy();
  });
});
