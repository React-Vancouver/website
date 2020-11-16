import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';

const mockProps = {
  isOpen: true,
  onCloseRequest: jest.fn(),
  children: <span>Hello World!</span>,
}

describe('Modal', () => {
  it('renders correctly', () => {
    const component = render(<Modal {...mockProps} />);

    expect(component).toBeTruthy();
  });
});
