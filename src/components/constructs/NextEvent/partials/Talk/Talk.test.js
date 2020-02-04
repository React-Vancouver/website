import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Talk from './Talk';

describe('Talk', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Talk />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});