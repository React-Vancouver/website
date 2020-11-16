import React from 'react';
import { render } from '@testing-library/react';

import AboutUs from './AboutUs';

const mockProps = {
  title: 'foo bar',
  blocks: [],
};

describe('AboutUs', () => {
  it('renders correctly', () => {
    const tree = render(<AboutUs {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
