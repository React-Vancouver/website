import React from 'react';
import { render } from '@testing-library/react';

import Stat from './Stat';

describe('Stat', () => {
  it('renders correctly', () => {
    const tree = render(<Stat />);

    expect(tree).toBeTruthy();
  });
});
