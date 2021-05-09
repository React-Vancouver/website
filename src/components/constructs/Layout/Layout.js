import React, { useMemo, useState, useCallback, createContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavData, useAsideData } from '@data';
import GlobalStyles from '@global';
import '@fontsource/open-sans/latin-700.css';
import '@fontsource/open-sans/latin-600.css';
import '@fontsource/space-mono/latin-700.css';

import {
  asideStyles,
  constructChildrenStyles,
  nextEventStyles,
  rootStyles,
  wrapperStyles,
} from './Layout.styles';
import PropTypes from 'prop-types';

import AsideMenu from '@constructs/AsideMenu';
import Box from '@elements/Box';
import Footer from '@sections/Nav';
import Nav from './partials/Nav';
import NextEvent from '@constructs/NextEvent';

const makeLinks = (links) =>
  links.map(({ url, ...rest }) => {
    if (url.startsWith('http')) {
      return { out: url, ...rest };
    }
    return { to: url, ...rest };
  });

export const LayoutContext = createContext({});

const Layout = ({ location, children }) => {
  // Navigation data ===========================================================
  const navigationData = useNavData();
  const asideData = useAsideData();
  const navLinks = makeLinks(navigationData);
  const asideLinks = makeLinks(asideData);
  const withFooter = true;

  // Page layout config ========================================================
  const isCollapsingNav = ['/'].includes(location.pathname);
  const childrenStyles = useMemo(
    () => constructChildrenStyles({ withFooter, withNav: !isCollapsingNav }),
    [withFooter, isCollapsingNav]
  );
  const [isTrayOpen, setTrayOpen] = useState(false);

  // Context ===================================================================
  const openTray = useCallback(() => setTrayOpen(true), []);
  const closeTray = useCallback(() => setTrayOpen(false), []);

  const context = {
    isTrayOpen,
    setTrayOpen,
    openTray,
    closeTray,
  };

  const animation = useSpring({
    transform: `translate3d(${isTrayOpen ? 2 : 100}%, 0, 0)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <GlobalStyles />
      <div css={rootStyles}>
        <AsideMenu css={asideStyles} links={asideLinks} />
        <animated.div css={nextEventStyles} style={animation}>
          <NextEvent onClose={closeTray} />
        </animated.div>
        <LayoutContext.Provider value={context}>
          <Box css={wrapperStyles}>
            {/* NAV */}
            <Nav
              links={navLinks}
              background="light"
              onButtonClick={openTray}
              isCollapsing={isCollapsingNav}
            />

            {/* CHILDREN */}
            <Box css={childrenStyles}>{children}</Box>

            {/* FOOTER */}
            {withFooter && (
              <Footer
                element="footer"
                links={navLinks}
                background="dark"
                onButtonClick={openTray}
              />
            )}
          </Box>
        </LayoutContext.Provider>
      </div>
    </>
  );
};

Layout.defaultProps = {
  withFooter: true,
  isCollapsingNav: false,
};

Layout.propTypes = {
  asideLinks: PropTypes.arrayOf(
    PropTypes.shape({
      brandName: PropTypes.string,
      title: PropTypes.string,
      to: PropTypes.string,
      out: PropTypes.string,
    })
  ),
  children: PropTypes.node,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  withFooter: PropTypes.bool,
  isCollapsingNav: PropTypes.bool,
};

export default React.memo(Layout);
