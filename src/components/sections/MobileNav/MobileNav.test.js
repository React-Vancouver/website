import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import MobileNav from './MobileNav';

describe('MobileNav', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<MobileNav />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});