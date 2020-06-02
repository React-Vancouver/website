import React, { useMemo, useState, useCallback, createContext } from 'react';
import { Global } from '@emotion/core';
import { GLOBAL_STYLES } from '@global';
// import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

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

class Layout extends React.Component {
  state = {
    isNextEventOpen: false,
  };

  // Context ===================================================================
  openNextEvent = () => this.setState({ isNextEventOpen: true });
  closeNextEvent = () => this.setState({ isNextEventOpen: false });

  childContext = {
    isNextEventOpen: this.state.isNextEventOpen,
    openNextEvent: this.openNextEvent,
    closeNextEvent: this.closeNextEvent,
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, nextState);
    if (this.state.isNextEventOpen !== nextState.isNextEventOpen) {
      return true;
    }
    return false;
  }

  render() {
    const {
      //   asideLinks,
      //   navLinks,
      children,
      className,
      isCollapsingNav,
      withFooter,
    } = this.props;

    const childrenStyles = constructChildrenStyles({
      withNav: !isCollapsingNav,
      withFooter,
    });
    const START = this.state.isNextEventOpen ? 100 : 2;
    const END = this.state.isNextEventOpen ? 2 : 100;
    return (
      <>
        <Global styles={GLOBAL_STYLES} />
        <div css={rootStyles} className={className}>
          <AsideMenu css={asideStyles} links={asideLinks} />
          <Spring
            from={{ transform: `translate3d(${START}%, 0, 0)` }}
            to={{ transform: `translate3d(${END}%, 0, 0)` }}
            config={{ mass: 5, tension: 500, friction: 80 }}
          >
            {(props) => (
              <div style={props} css={nextEventStyles}>
                <NextEvent onClose={this.closeNextEvent} />
              </div>
            )}
          </Spring>
          {/* <animated.div css={nextEventStyles} style={animation}>
            <NextEvent onClose={closeNextEvent} />
          </animated.div> */}
          <LayoutContext.Provider value={this.childContext}>
            <Box css={wrapperStyles}>
              {/* NAV */}
              <Nav
                links={navLinks}
                background="light"
                onButtonClick={this.openNextEvent}
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
                  onButtonClick={this.openNextEvent}
                />
              )}
            </Box>
          </LayoutContext.Provider>
        </div>
      </>
    );
  }
}

// const Layout = () => {
//   const childrenStyles = useMemo(
//     () => constructChildrenStyles({ withFooter, withNav: !isCollapsingNav }),
//     [withFooter, isCollapsingNav]
//   );
//   const [isNextEventOpen, setNextEventOpen] = useState(true);
// Context ===================================================================
// const openNextEvent = useCallback(() => setNextEventOpen(true), []);
// const closeNextEvent = useCallback(() => setNextEventOpen(false), []);

// const context = {
//   isNextEventOpen,
//   setNextEventOpen,
//   openNextEvent: this.openNextEvent,
//   closeNextEvent: this.closeNextEvent,
// };

//   const animation = useSpring({
//     transform: `translate3d(${isNextEventOpen ? 2 : 100}%, 0, 0)`,
//     config: { mass: 5, tension: 500, friction: 80 },
//   });
// };

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
  className: PropTypes.string,
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

export const withLayout = (Component, options = {}) => {
  const { isCollapsingNav, withFooter } = options;
  const WithLayout = (props) => (
    <Layout
      isCollapsingNav={isCollapsingNav}
      withFooter={withFooter}
      {...props}
    >
      <Component {...props} />
    </Layout>
  );

  WithLayout.displayName = `withLayout(${Component.displayName ||
    Component.name ||
    'Component'})`;

  return WithLayout;
};

export default React.memo(Layout);
