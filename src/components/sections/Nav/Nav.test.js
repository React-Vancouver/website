import React from 'react';
import { render } from '@testing-library/react';

import Nav from './Nav';

describe('Nav', () => {
  it('renders correctly', () => {
    const tree = render(<Nav />);

    expect(tree).toBeTruthy();
  });
});
