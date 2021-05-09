import React from 'react';
import { render } from '@testing-library/react';

import Talk from './Talk';

const mockProps = {
  i: 1,
  isPlaceHolder: false,
  talk: {
    title: 'foo',
    speaker: {
      firstName: 'jane',
      lastName: 'doe',
    },
  },
};

describe('Talk', () => {
  it('renders correctly', () => {
    const tree = render(<Talk {...mockProps} />);
    
    expect(tree).toBeTruthy();
  });
});
