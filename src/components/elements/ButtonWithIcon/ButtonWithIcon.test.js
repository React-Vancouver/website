import React from 'react';
import { render } from '@testing-library/react';

import ButtonWithIcon from './ButtonWithIcon';

describe('ButtonWithIcon', () => {
  it('renders correctly', () => {
    const tree = render(<ButtonWithIcon />);

    expect(tree).toBeTruthy();
  });
});
