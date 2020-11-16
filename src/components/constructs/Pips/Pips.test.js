import React from 'react';
import { render } from '@testing-library/react';

import Pips from './Pips';

describe('Pips', () => {
  it('renders correctly', () => {
    const tree = render(<Pips />);

    expect(tree).toBeTruthy();
  });
});
