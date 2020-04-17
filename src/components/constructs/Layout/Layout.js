import React, { useMemo, useState, useCallback, createContext } from 'react';
import { Global } from '@emotion/core';
import { GLOBAL_STYLES } from '@global';
import { useSpring, animated } from 'react-spring';
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

const asideLinks = [
  { brandName: 'react', out: 'https://reactjs.org/', title: 'React' },
  {
    brandName: 'meetup',
    out: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/',
    title: 'Meetup',
  },
  {
    brandName: 'slack',
    out: 'https://slackrv.now.sh/',
    title: 'Slack',
  },
];

import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';
const navLinks = [
  { title: 'Events', to: EVENTS },
  { title: 'Speakers', to: SPEAKERS },
  { title: 'Sponsors', to: SPONSORS },
  { title: 'About Us', to: ABOUT_US },
];

export const LayoutContext = createContext({});

const Layout = ({
  //   asideLinks,
  children,
  className,
  //   navLinks,
  withFooter,
  withNav,
}) => {
  const onGetInvolved = useCallback(() => {});
  const childrenStyles = useMemo(
    () => constructChildrenStyles({ withFooter, withNav }),
    [withFooter, withNav]
  );
  const [isNextEventOpen, setNextEventOpen] = useState(false);
  const closeNextEvent = useCallback(() => setNextEventOpen(false), []);

  const animation = useSpring({
    transform: `translate3d(${isNextEventOpen ? 2 : 100}%, 0, 0)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const context = {
    isNextEventOpen,
    setNextEventOpen,
  };

  return (
    <>
      <Global styles={GLOBAL_STYLES} />
      <div css={rootStyles} className={className}>
        <AsideMenu css={asideStyles} links={asideLinks} />
        <animated.div css={nextEventStyles} style={animation}>
          <NextEvent onClose={closeNextEvent} />
        </animated.div>
        <LayoutContext.Provider value={context}>
          <Box css={wrapperStyles}>
            {/* NAV */}
            <Nav
              links={navLinks}
              background="light"
              onButtonClick={onGetInvolved}
            />

            {/* CHILDREN */}
            <Box css={childrenStyles}>{children}</Box>

            {/* FOOTER */}
            {withFooter && (
              <Footer
                element="footer"
                links={navLinks}
                background="dark"
                onButtonClick={onGetInvolved}
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
  withNav: true,
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  asideLinks: PropTypes.arrayOf(
    PropTypes.shape({
      brandName: PropTypes.string,
      title: PropTypes.string,
      to: PropTypes.string,
      out: PropTypes.string,
    })
  ),
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  withFooter: PropTypes.bool,
  withNav: PropTypes.bool,
};

export const withLayout = (Component, { withNav, withLayout }) => {
  const WithLayout = (props) => (
    <Layout withNav={withNav} withLayout={withLayout}>
      <Component {...props} />
    </Layout>
  );

  WithLayout.displayName = `withLayout(${Component.displayName ||
    Component.name ||
    'Component'})`;

  return WithLayout;
};

export default Layout;
