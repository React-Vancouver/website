import React from 'react';
import { render } from '@testing-library/react';

import Link from './Link';

describe('Link', () => {
  it('renders correctly', () => {
    const tree = render(<Link />);

    expect(tree).toBeTruthy();
  });
});
