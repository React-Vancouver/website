import { cssSwitch, cssValue, cssMap } from '@utilities/styles';
import {
    caption,
    emphasis,
    heading,
    lead,
    paragraph,
    subheading,
    title,
} from '@blocks/typography';
import { label } from '@blocks/form';
import S from '@symbols';
const { getFontScale } = S;

const colors = { ...S.COLOR_THEME, ...S.COLOR_GREYS };
const base = paragraph;
export const FONTS = {
    TEXT: S.TYPOGRAPHY_TEXT_FONT,
    HEADING: S.TYPOGRAPHY_HEADING_FONT,
};
FONTS.DEFAULT = FONTS.HEADING;

const makeColorModifier = (color) => ({ color });
const makeFontModifier = (fontFamily) => ({ fontFamily });

export const constructStyles = (props) => [
    base,
    cssSwitch({ props, prop: 'title', css: title }),
    cssSwitch({ props, prop: 'heading', css: heading }),
    cssSwitch({ props, prop: 'subheading', css: subheading }),
    cssSwitch({ props, prop: 'caption', css: caption }),
    cssSwitch({ props, prop: 'emphasis', css: emphasis }),
    cssSwitch({ props, prop: 'label', css: label }),
    cssSwitch({ props, prop: 'lead', css: lead }),
    cssValue({ props, prop: 'scale', makeCSS: getFontScale }),
    makeColorModifier(S.COLOR_TEXT),
    cssMap({
        props,
        prop: 'color',
        map: colors,
        makeCSS: makeColorModifier,
    }),
    cssMap({
        props,
        prop: 'font',
        map: FONTS,
        makeCSS: makeFontModifier,
    }),
];
