// =============================================================================
// Scale
// =============================================================================

export const SCALE_REM = 10;
export const SCALE_BASE = `${(100 / 16) * SCALE_REM}%`;
export const SCALE_STEP = 8;
export const SCALE_RATIO = 1.5;

/**
 * Gets a rem value for n units of space.
 * @param   {number} n Units of space
 * @returns {string} Rem value
 */
export const calcSpace = (n, adjustment = 0) =>
    `${(SCALE_STEP * n) / SCALE_REM + adjustment}rem`;

export const calcSpaceRaw = (n, adjustment = 0) =>
    (SCALE_STEP * n) / SCALE_REM + adjustment;
