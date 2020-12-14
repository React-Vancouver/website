import React from 'react';
import { render } from "@testing-library/react";

import Speakers from './Speakers';

describe('Speakers', () => {
    it('renders correctly', () => {
        const component = render(<Speakers />);

        expect(component).toBeTruthy();
    })
});
