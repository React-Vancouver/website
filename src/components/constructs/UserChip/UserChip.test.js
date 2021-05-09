import React from 'react';
import { render } from '@testing-library/react';

import UserChip from './UserChip';

const mockProps = {
  data: {
    id: 'foo',
    firstName: 'jane',
    lastName: 'doe',
  },
  onClick: jest.fn(),
  text: 'lorem ipsum',
}

describe('UserChip', () => {
  it('renders correctly', () => {
    const tree = render(<UserChip {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
