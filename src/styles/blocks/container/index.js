import S from '@symbols';

export const tabletPadding = {
  paddingLeft: S.calcSpace(3),
  paddingRight: S.calcSpace(3),
};

export const mobilePadding = {
  paddingLeft: S.calcSpace(2),
  paddingRight: S.calcSpace(2),
};

export const base = {
  maxWidth: S.LAYOUT_CONTAINER,
  margin: '0 auto',
  [`@media (max-width: ${S.LAYOUT_CONTAINER_MAX})`]: tabletPadding,
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: mobilePadding,
};

export const article = {
  maxWidth: S.LAYOUT_ARTICLE,
  margin: '0 auto',
  [`@media (max-width: ${S.LAYOUT_CONTAINER_MAX})`]: tabletPadding,
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: mobilePadding,
};
