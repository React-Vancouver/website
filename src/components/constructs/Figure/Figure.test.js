import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Figure from './Figure';

describe('Figure', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Figure />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});