import React from 'react';
import { render } from '@testing-library/react';

import NavGroup from './NavGroup';

const mockLink = {
  out: 'foo',
  to: '/the-moon',
  title: 'test contoso link',
};

const mockProps = {
  links: [mockLink]
}

describe('NavGroup', () => {
  it('renders correctly', () => {
    const tree = render(<NavGroup {...mockProps} />);
    
    expect(tree).toBeTruthy();
  });
});
