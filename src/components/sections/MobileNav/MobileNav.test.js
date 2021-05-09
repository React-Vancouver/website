import React from 'react';
import { render } from '@testing-library/react';

import MobileNav from './MobileNav';

const mockProps = {
  links: [{ title: 'foo bar' }]
};

describe('MobileNav', () => {
  it('renders correctly', () => {
    const tree = render(<MobileNav {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
