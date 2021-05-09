import React from 'react';
import { render } from '@testing-library/react';

import SpeakerGallery from './SpeakerGallery';

const mockProps = {
  data: [],
};

describe('SpeakerGallery', () => {
  it('renders correctly', () => {
    const tree = render(<SpeakerGallery {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
