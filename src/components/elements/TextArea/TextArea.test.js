import React from 'react';
import { render } from "@testing-library/react";

import TextArea from './TextArea';

describe('TextArea', () => {
    it('renders correctly', () => {
        const component = render(<TextArea />);

        expect(component).toBeTruthy();
    })
});
