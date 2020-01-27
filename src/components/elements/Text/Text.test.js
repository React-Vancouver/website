import React from 'react';
import renderer from 'react-test-renderer';
// import { render } from "@testing-library/react"

import Text from './Text';

describe('Text', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Text />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
