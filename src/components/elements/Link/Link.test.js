import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Link from './Link';

describe('Link', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Link />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});