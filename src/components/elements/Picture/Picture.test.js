import React from 'react';
import { render } from '@testing-library/react';

import Picture from './Picture';

describe('Picture', () => {
  it('renders correctly', () => {
    const tree = render(<Picture alt="something cool" src="something_cool.jpg" />);

    expect(tree).toBeTruthy();
  });
});
