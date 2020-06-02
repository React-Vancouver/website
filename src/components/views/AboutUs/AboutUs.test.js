import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import AboutUs from './AboutUs';

describe('AboutUs', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<AboutUs />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});