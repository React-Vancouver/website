import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  asideStyles,
  menuButtonStyles,
  mobileNavStyles,
  navStyles,
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

const LayoutNav = ({ links, background, onButtonClick, isCollapsing }) => {
  const { [MOBILE_BREAKPOINT]: showMobileNav } = useMedia([MOBILE_BREAKPOINT]);
  const { [SECONDARY_NAV_BREAKPOINT]: isSecondaryNav } = usePageOffset([
    SECONDARY_NAV_BREAKPOINT,
  ]);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);
  const { translateX } = useSpring({
    translateX: isMobileNavOpen ? 0 : 100,
    config: {
      mass: 5,
      tension: 500,
      friction: 100,
    },
  });
  const START = isCollapsing ? -100 : 0;
  const { translateY } = useSpring({
    translateY: isSecondaryNav ? 0 : START,
    config: {
      mass: 5,
      tension: 500,
      friction: 100,
    },
  });

  return showMobileNav ? (
    <>
      <animated.nav
        css={mobileNavStyles}
        style={{
          transform: translateY.to((y) => `translate3d(0,${y}%,0)`),
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
          transform: translateX.to((x) => `translate3d(${x}%,0,0)`),
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
    <animated.nav
      css={navStyles}
      style={{
        transform: translateY.to((y) => `translate3d(0,${y}%,0)`),
      }}
    >
      <Nav
        links={links}
        background={background}
        onButtonClick={onButtonClick}
      />
    </animated.nav>
  );
};

LayoutNav.propTypes = {
  background: PropTypes.oneOf(['dark', 'light']),
  isCollapsing: PropTypes.bool,
  links: PropTypes.array,
  onButtonClick: PropTypes.func,
};

export default LayoutNav;
