// =============================================================================
// Typography
// =============================================================================

import S from '@symbols';

const { getFontScale } = S;

export const paragraph = {
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    ...getFontScale(4),
};

export const emphasis = {
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
};

export const title = {
    fontFamily: S.TYPOGRAPHY_HEADING_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    ...getFontScale(7),
};

export const heading = {
    fontFamily: S.TYPOGRAPHY_HEADING_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    ...getFontScale(6),
};

export const subheading = {
    fontFamily: S.TYPOGRAPHY_HEADING_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    ...getFontScale(5),
};

export const caption = {
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    letterSpacing: '0.025rem',
    ...getFontScale(3),
};

export default {
    caption,
    emphasis,
    heading,
    paragraph,
    subheading,
    title,
};
