import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { withSpacing } from '@utilities/styles/spacing';
import {
  constructButtonStyles,
  constructLogoStyles,
  headerStyles,
  navItemStyles,
  rootStyles,
} from './MobileNav.styles';

import Box from '@elements/Box';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import Link from '@elements/Link';
import Logo from '@elements/Logo';

const MobileNav = ({
  background,
  className,
  ctaText,
  element,
  links,
  onButtonClick,
  onClose,
}) => {
  const isDarkBackground = background === 'dark';

  const transitions = useTransition(links, (link) => link.title, {
    from: { transform: 'translate3d(40px,0,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(40px,0,0)' },
    trail: 50,
  });

  const logoStyles = useMemo(() => constructLogoStyles({ isDarkBackground }), [
    isDarkBackground,
  ]);
  const buttonStyles = useMemo(
    () => constructButtonStyles({ isDarkBackground }),
    [isDarkBackground]
  );

  return (
    <Box
      p3
      element={element}
      css={rootStyles}
      className={className}
      backgroundColor={isDarkBackground ? 'grey_30' : 'secondary_l'}
    >
      <header css={headerStyles}>
        <Link p1 css={logoStyles} to="/">
          <Logo
            css={{ width: '3rem' }}
            type={isDarkBackground ? 'mark-primary' : 'mark-inverse'}
          />
        </Link>
        <div onClick={onClose} role="button" css={buttonStyles}>
          Close&emsp;<span>×</span>
        </div>
      </header>
      <Box element="ul" py5>
        {transitions.map(({ item, props, key }) => (
          <animated.li key={key} style={props} css={navItemStyles}>
            <Link
              py2
              to={item.to}
              color={isDarkBackground ? 'secondary_l' : 'secondary_d'}
              scale={6}
            >
              {item.title}
            </Link>
          </animated.li>
        ))}
      </Box>
      <ButtonWithIcon color="secondary_d" onClick={onButtonClick}>
        {ctaText}
      </ButtonWithIcon>
    </Box>
  );
};

MobileNav.defaultProps = {
  element: 'nav',
  ctaText: 'Get involved!',
};

MobileNav.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  ctaText: PropTypes.string,
  element: PropTypes.node,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      out: PropTypes.string,
      title: PropTypes.string,
      to: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  onButtonClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default React.memo(withSpacing(MobileNav));
