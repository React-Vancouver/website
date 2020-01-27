import React from 'react';
import S from '@symbols';
import { Global } from '@emotion/core';
import { paragraph, caption, emphasis, label } from '@blocks/typography';
import { link, button } from '@blocks/interactive';

/**
 * @todo: Create style blocks for forms.
 */

const { getFontScale, calcFontSize, calcLineHeight, calcSpace } = S;

export const GLOBAL_STYLES = {
    '*': {
        boxSizing: 'border-box',
    },
    html: {
        lineHeight: calcLineHeight(4),
        WebkitTextSizeAdjust: '100%',
        fontSize: S.SCALE_BASE,
        fontFamily: S.TYPOGRAPHY_TEXT_FONT,
        color: S.COLOR_TEXT,
        height: '100%',
        position: 'relative',
        backgroundColor: S.COLOR_BACKGROUND,
        margin: 0,
        padding: 0,
    },
    body: {
        height: '100%',
        position: 'relative',
        margin: 0,
        padding: 0,
        ...paragraph,
    },
    // TYPOGRAPHY ==============================================================
    p: {
        marginBottom: calcSpace(2),
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
        fontSize: calcFontSize(2),
        lineHeight: calcLineHeight(2),
        marginBottom: calcSpace(2),
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    blockquote: {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        marginInlineStart: calcSpace(4),
        marginInlineEnd: calcSpace(4),
    },
    cite: {
        fontStyle: 'normal',
        ...caption,
    },
    dl: {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        marginInlineStart: 0,
        marginInlineEnd: 0,
        ...paragraph,
    },
    dt: {
        marginBottom: calcSpace(1),
        marginTop: calcSpace(2),
        marginLeft: 0,
        marginRight: 0,
    },
    dd: {
        marginInlineStart: calcSpace(4),
    },
    hr: {
        margin: 0,
        height: 0,
        border: 'none',
        borderTop: S.LINE_DEFAULT_BORDER,
        marginBottom: S.LINE_WIDTH,
    },
    'ul, ol': {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        paddingInlineStart: 0,
        listStylePosition: 'inside',
    },
    ul: {
        listStyle: 'square',
        listStylePosition: 'inside',
    },
    'strong, em': {
        fontStyle: 'normal',
        ...emphasis,
    },
    // MEDIA ===================================================================
    'img, video': {
        width: '100%',
    },
    figure: {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        marginInlineStart: 0,
        marginInlineEnd: 0,
    },
    figcaption: {
        ...caption,
        fontStyle: 'normal',
        marginBottom: calcSpace(2),
        marginTop: calcSpace(2),
        marginLeft: 0,
        marginRight: 0,
    },
    // INTERACTIVE =============================================================
    a: {
        ...link,
    },
    button: {
        ...button,
    },
    // TABLE ===================================================================
    table: {
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
        border: S.LINE_DEFAULT_BORDER,
    },
    caption: {
        ...caption,
        marginBottom: calcSpace(2),
    },
    tr: {
        height: calcSpace(5),
    },
    'th, label': {
        ...label,
    },
    'th, td': {
        border: S.LINE_DEFAULT_BORDER,
        padding: `0 ${calcSpace(2)}`,
    },
    // FORM ====================================================================
    'input, textarea, select': {
        display: 'block',
        margin: 0,
        padding: `0 ${calcSpace(2)}`,
        width: '100%',
        minHeight: calcSpace(5),
        backgroundColor: 'transparent',
        border: S.LINE_DEFAULT_BORDER,
        borderRadius: S.LINE_BORDER_RADIUS,
        fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_REGULAR,
        fontFamily: S.TYPOGRAPHY_TEXT_FONT,
        ...getFontScale(1),
        color: S.COLOR_TEXT,
        caretColor: 'currentColor',
        transition: S.MOTION_DEFAULT_TRANSITION,
        '&:hover': {
            borderColor: S.COLOR_UTILITY.ACTION,
        },
        '&:focus': {
            borderColor: S.COLOR_UTILITY.ACTION,
            outline: 'none',
        },
        '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.5,
        },
    },
    label: {
        display: 'block',
        marginBottom: calcSpace(2),
    },
    'input[type="color"]': {
        padding: 0,
        border: 0,
        height: calcSpace(5),
        width: calcSpace(5),
        backgroundColor: 'transparent',
    },
    'input[type="checkbox"], input[type="radio"]': {
        display: 'inline',
        width: 'unset',
        marginRight: calcSpace(2),
        '+ label': {
            display: 'inline-block',
        },
    },
    textarea: {
        resize: 'vertical',
        minHeight: calcSpace(7),
        padding: `${calcSpace(1)} ${calcSpace(2)}`,
    },
    select: {
        maxWidth: '100%',
        width: 'auto',
        height: calcSpace(5),
    },
    option: {
        padding: `0 ${calcSpace(2)}`,
    },
    fieldset: {
        margin: 0,
        marginInlineStart: 0,
        marginInlineEnd: 0,
        padding: `${calcSpace(1)} ${calcSpace(2)}`,
        paddingBlockStart: calcSpace(2),
        paddingBlockEnd: calcSpace(1),
        paddingInlineStart: calcSpace(2),
        paddingInlineEnd: calcSpace(2),
        border: S.LINE_DEFAULT_BORDER,
    },
    legend: {
        padding: `0 ${calcSpace(1)}`,
        fontStyle: 'normal',
        ...emphasis,
    },
};

const GlobalStyles = () => <Global styles={GLOBAL_STYLES} />;

export default GlobalStyles;
