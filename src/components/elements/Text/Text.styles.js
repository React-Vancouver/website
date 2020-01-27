import { cssSwitch, cssValue, cssMap } from '@utilities/styles';
import {
    caption,
    emphasis,
    heading,
    label,
    paragraph,
    subheading,
    title,
} from '@blocks/typography';
import S from '@symbols';
const { getFontScale } = S;

const base = paragraph;

const makeColorModifier = (color) => ({ color });

export const constructStyles = (props) => [
    base,
    cssSwitch({ props, prop: 'title', css: title }),
    cssSwitch({ props, prop: 'heading', css: heading }),
    cssSwitch({ props, prop: 'subheading', css: subheading }),
    cssSwitch({ props, prop: 'caption', css: caption }),
    cssSwitch({ props, prop: 'emphasis', css: emphasis }),
    cssSwitch({ props, prop: 'label', css: label }),
    cssValue({ props, prop: 'scale', makeCSS: getFontScale }),
    makeColorModifier(S.COLOR_TEXT),
    cssMap({
        props,
        prop: 'color',
        map: { ...S.COLOR_THEME_HUES, ...S.COLOR_GREYS },
        makeCSS: makeColorModifier,
    }),
];
