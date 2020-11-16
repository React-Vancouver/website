import React from 'react';
import { render } from '@testing-library/react';

import Image from './Image';

describe('Image', () => {
  it('renders correctly', () => {
    const tree = render(<Image alt="something cool" />);

    expect(tree).toBeTruthy();
  });
});
