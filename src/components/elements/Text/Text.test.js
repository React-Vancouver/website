import React from 'react';
import { render } from "@testing-library/react"

import Text from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    const tree = render(<Text />);

    expect(tree).toBeTruthy();
  });
});
