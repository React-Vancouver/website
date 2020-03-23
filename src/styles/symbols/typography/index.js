// =============================================================================
// Typography
// =============================================================================

import { SCALE_STEP, SCALE_REM } from '../scale';

export const TYPOGRAPHY_TEXT_FONT = '"Open Sans", sans-serif';
export const TYPOGRAPHY_HEADING_FONT = '"Space Mono", monospace';
export const TYPOGRAPHY_FONT_WEIGHT_REGULAR = 600;
export const TYPOGRAPHY_FONT_WEIGHT_BOLD = 700;
export const TYPOGRAPHY_RHYTHM = SCALE_STEP / 2;
export const TYPOGRAPHY_BASELINE = SCALE_STEP * 2;
export const TYPOGRAPHY_FONT_RATIO = 0.875;

const space = (n) => (TYPOGRAPHY_RHYTHM * n) / SCALE_REM;
const roundUpToEven = (n) => (n % 2 === 0 ? n : n + 1);
export const calcFontSize = (n) =>
  space(n) * TYPOGRAPHY_FONT_RATIO > 1.2
    ? `${(space(n) * TYPOGRAPHY_FONT_RATIO).toFixed(2)}rem`
    : '1.2rem';

export const calcLineHeight = (n) => `${space(roundUpToEven(n))}rem`;

export const getFontScale = (n) => ({
  fontSize: calcFontSize(n),
  lineHeight: calcLineHeight(n),
});
