// =============================================================================
// Color
// =============================================================================

import { calcGrey, calcGradient } from '@utilities/styles/colors';

export const COLOR_THEME = {
  PRIMARY: '#68E0CF',
  SECONDARY_L: '#EAE8F7',
  SECONDARY_D: '#6146FB',
  TERTIARY: '#F8736B',
};
COLOR_THEME.DEFAULT = COLOR_THEME.PRIMARY;

export const COLOR_UTILITY = {
  WARN: '#FAC864',
  ACTION: COLOR_THEME.PRIMARY,
  ERROR: '#EB5757',
  SUCCESS: COLOR_THEME.PRIMARY,
};
COLOR_UTILITY.DEFAULT = COLOR_UTILITY.ACTION;

export const COLOR_GREY_HUE = 232;

export const COLOR_GREYS = {
  BLACK: '#000000',
  DARK: calcGrey(COLOR_GREY_HUE, 30),
  MEDIUM: calcGrey(COLOR_GREY_HUE, 60),
  LIGHT: calcGrey(COLOR_GREY_HUE, 98),
  WHITE: '#FFFFFF',
  GREY_95: calcGrey(COLOR_GREY_HUE, 95),
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
