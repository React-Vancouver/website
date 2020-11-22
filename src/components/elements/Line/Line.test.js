import React from 'react';
import { render } from "@testing-library/react";

import Line from './Line';

describe('Line', () => {
    it('renders correctly', () => {
        const component = render(<Line />);

        expect(component).toBeTruthy();
    })
});
