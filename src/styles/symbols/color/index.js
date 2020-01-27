// =============================================================================
// Color
// =============================================================================

import { calcGrey, calcGradient } from '@utilities/styles/colors';

export const COLOR_THEME_HUES = {
    SUN_2: '#FBECBC',
    SUN_4: '#F9E39B',
    SUN_6: '#F7D979',
    SUN_8: '#F5D058',
    VIOLET_2: '#7223FA',
    VIOLET_4: '#5B1CC7',
    VIOLET_6: '#441594',
    VIOLET_8: '#2D0E61',
    EMERALD_2: '#17A890',
    EMERALD_4: '#107564',
    EMERALD_6: '#094239',
    EMERALD_8: '#062923',
};
COLOR_THEME_HUES.DEFAULT = COLOR_THEME_HUES.VIOLET_2;

export const COLOR_THEME = {
    PRIMARY: COLOR_THEME_HUES.VIOLET_2, // Violet
    SECONDARY: COLOR_THEME_HUES.EMERALD_2, // Emerald
    BACKGROUND: COLOR_THEME_HUES.EMERALD_4, // Emerald
    FOREGROUND: COLOR_THEME_HUES.SUN_8, // Sun,
};
COLOR_THEME.DEFAULT = COLOR_THEME.PRIMARY;

export const COLOR_UTILITY = {
    WARN: COLOR_THEME_HUES.SUN_8, // Sun
    ACTION: COLOR_THEME_HUES.VIOLET_2, // Modern Sky
    ERROR: '#EB5757', // Tomato
    SUCCESS: COLOR_THEME_HUES.EMERALD_2, // Emerald,
};
COLOR_UTILITY.DEFAULT = COLOR_UTILITY.ACTION;

export const COLOR_GREY_HUE = 240;

export const COLOR_GREYS = {
    BLACK: '#000000',
    DARK: calcGrey(COLOR_GREY_HUE, 30),
    MEDIUM: calcGrey(COLOR_GREY_HUE, 60),
    LIGHT: calcGrey(COLOR_GREY_HUE, 98),
    WHITE: '#FFFFFF',
    GREY_90: calcGrey(COLOR_GREY_HUE, 90),
    GREY_80: calcGrey(COLOR_GREY_HUE, 80),
    GREY_70: calcGrey(COLOR_GREY_HUE, 70),
    GREY_60: calcGrey(COLOR_GREY_HUE, 60),
    GREY_50: calcGrey(COLOR_GREY_HUE, 50),
    GREY_40: calcGrey(COLOR_GREY_HUE, 40),
    GREY_30: calcGrey(COLOR_GREY_HUE, 30),
    GREY_20: calcGrey(COLOR_GREY_HUE, 20),
    GREY_10: calcGrey(COLOR_GREY_HUE, 10),
};
COLOR_GREYS.DEFAULT = COLOR_GREYS.DARK;

export const GRADIENT = {
    ACCENT: calcGradient(135, COLOR_THEME.PRIMARY, COLOR_THEME.SECONDARY),
};
GRADIENT.DEFAULT = GRADIENT.ACCENT;

export const COLOR_TEXT = COLOR_GREYS.DARK;
export const COLOR_BACKGROUND = COLOR_GREYS.LIGHT;
