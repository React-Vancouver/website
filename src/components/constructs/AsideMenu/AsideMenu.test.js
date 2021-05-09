import React from 'react';
import { render } from '@testing-library/react';

import AsideMenu from './AsideMenu';

const mockLink = {
  out: 'foo',
  to: '/the-moon',
  brandName: 'contoso',
  title: 'test contoso link',
};

const mockProps = {
  links: [mockLink],
};

describe('AsideMenu', () => {
  it('renders correctly', () => {
    const component = render(<AsideMenu {...mockProps} />);

    expect(component).toBeTruthy();
  });
});
