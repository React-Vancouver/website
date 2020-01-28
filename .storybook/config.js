import { action } from '@storybook/addon-actions';
import { configure, addDecorator } from '@storybook/react';
import { Global } from '@emotion/core';
import { GLOBAL_STYLES } from '@global';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Styleguide from '@utilities/styles/styleguide';

addDecorator((story) => (
    <>
        <Global styles={GLOBAL_STYLES} />
        <Styleguide>{story()}</Styleguide>
    </>
));
addDecorator(withA11y);
addDecorator(withKnobs);

/**
 * @todo Load stories in a specified order
 * @body The correct order should be: symbols, blocks, global, elements,
 * components, (optional) constructs, (optional), views
 */
// Automatically import all files ending in *.story.js
configure(require.context('../src', true, /\.story\.js$/), module);

// Gatsby’s Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing
// environment
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside
// a storybook
window.___navigate = (pathname) => {
    action('NavigateTo:')(pathname);
};
