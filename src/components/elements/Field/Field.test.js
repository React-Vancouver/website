import React from 'react';
import { render } from "@testing-library/react";

import Field from './Field';

describe('Field', () => {
    it('renders correctly', () => {
        const component = render(<Field />);

        expect(component).toBeTruthy();
    })
});
