import React from 'react';
import { render } from "@testing-library/react";

import Sponsors from './Sponsors';

describe('Sponsors', () => {
    it('renders correctly', () => {
        const component = render(<Sponsors />);

        expect(component).toBeTruthy();
    })
});
