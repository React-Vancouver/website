import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Nav from './Nav';

describe('Nav', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Nav />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});