import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import BrandLogo from './BrandLogo';

describe('BrandLogo', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<BrandLogo />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});