import React from 'react';
import { render } from '@testing-library/react';

import Box from './Box';

describe('Box', () => {
  it('renders correctly', () => {
    const tree = render(<Box />);

    expect(tree).toBeTruthy();
  });
});
