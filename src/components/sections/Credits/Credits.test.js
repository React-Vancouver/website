import React from 'react';
import { render } from '@testing-library/react';

import Credits from './Credits';

const mockProps = {
  data: [
    {
      id: 'foo',
      firstName: 'jane',
      lastName: 'doe',
    },
  ],
};

describe('Credits', () => {
  it('renders correctly', () => {
    const tree = render(<Credits {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
