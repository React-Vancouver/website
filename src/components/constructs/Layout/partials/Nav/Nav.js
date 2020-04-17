import React, { useState, useCallback } from 'react';
import {
  asideStyles,
  mobileNavigationStyles,
  menuButtonStyles,
} from './Nav.styles';
import { useSpring, animated } from 'react-spring';
import S from '@symbols';
import useMedia from '@utilities/hooks/use-media';
import usePageOffset from '@utilities/hooks/use-page-offset';

import Box from '@elements/Box';
import Icon from '@elements/Icon';
import Logo from '@elements/Logo';
import MobileNav from '@sections/MobileNav';
import Nav from '@sections/Nav';
import Text from '@elements/Text';

const MOBILE_BREAKPOINT = `(max-width: ${S.LAYOUT_MOBILE_MAX})`;
const SECONDARY_NAV_BREAKPOINT = '>56';

const LayoutNav = ({ links, background, onButtonClick }) => {
  const { [MOBILE_BREAKPOINT]: showMobileNav } = useMedia([MOBILE_BREAKPOINT]);
  const { [SECONDARY_NAV_BREAKPOINT]: isSecondaryNav } = usePageOffset([
    SECONDARY_NAV_BREAKPOINT,
  ]);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const openMobileNav = useCallback(() => setIsMobileNavOpen(true));
  const closeMobileNav = useCallback(() => setIsMobileNavOpen(false));
  const { translateX } = useSpring({
    translateX: isMobileNavOpen ? 0 : 100,
    config: {
      mass: 5,
      tension: 500,
      friction: 100,
    },
  });
  const { translateY } = useSpring({
    translateY: isSecondaryNav ? 0 : -100,
    config: {
      mass: 5,
      tension: 500,
      friction: 100,
    },
  });

  return showMobileNav ? (
    <>
      <animated.nav
        css={mobileNavigationStyles}
        style={{
          transform: translateY.interpolate((y) => `translate3d(0,${y}%,0)`),
        }}
      >
        <Box py2 px2 backgroundColor="secondary_d">
          <Logo type="mark-inverse" />
          <Text subheading color="white">
            React Vancouver
          </Text>
          <div
            tabIndex="0"
            role="button"
            aria-pressed="false"
            css={menuButtonStyles}
            onClick={openMobileNav}
          >
            <Text emphasis color="white">
              Menu
            </Text>
            <Icon name="menu" />
          </div>
        </Box>
      </animated.nav>
      <animated.aside
        css={asideStyles}
        style={{
          transform: translateX.interpolate((x) => `translate3d(${x}%,0,0)`),
        }}
      >
        <MobileNav
          isShowing={isMobileNavOpen}
          onClose={closeMobileNav}
          links={links}
          background={background}
          onButtonClick={onButtonClick}
        />
      </animated.aside>
    </>
  ) : (
    <Nav links={links} background={background} onButtonClick={onButtonClick} />
  );
};

export default LayoutNav;
