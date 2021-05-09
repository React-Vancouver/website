import React from 'react';
import { render } from '@testing-library/react';

import Grid from './Grid';

describe('Grid', () => {
  it('renders correctly', () => {
    const tree = render(<Grid />);

    expect(tree).toBeTruthy();
  });
});
