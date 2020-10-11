import React from 'react';
import { render } from '@testing-library/react';

import EventGallery from './EventGallery';

const mockProps = {
  data: [],
};

describe('EventGallery', () => {
  it('renders correctly', () => {
    const tree = render(<EventGallery {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
