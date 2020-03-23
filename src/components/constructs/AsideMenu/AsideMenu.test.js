import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import AsideMenu from './AsideMenu';

describe('AsideMenu', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AsideMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
