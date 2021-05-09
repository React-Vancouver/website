import React from 'react';
import { render } from "@testing-library/react";

import TalkCard from './TalkCard';

describe('TalkCard', () => {
    it('renders correctly', () => {
        const component = render(<TalkCard />);

        expect(component).toBeTruthy();
    })
});
