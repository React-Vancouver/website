import React from 'react';
import { render } from '@testing-library/react';

import Avatar from './Avatar';

const mockProps = {
  alt: 'something cool',
  firstName: 'jane',
  lastName: 'doe',
  scale: 1,
}

describe('Avatar', () => {
  it('renders correctly', () => {
    const tree = render(<Avatar {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
