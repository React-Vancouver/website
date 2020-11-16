import React from 'react';
import { render } from '@testing-library/react';

import Sponsors from './Sponsors';

const mockProps = {
  data: []
};

describe('Sponsors', () => {
  it('renders correctly', () => {
    const tree = render(<Sponsors {...mockProps} />);

    expect(tree).toBeTruthy();
  });
});
