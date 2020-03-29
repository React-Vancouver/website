import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { rootStyles } from './Nav.styles';

import Box from '@elements/Box';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import Link from '@elements/Link';
import Logo from '@elements/Logo';
import NavGroup from '@constructs/NavGroup';

const Nav = ({
  element: Element,
  className,
  links,
  background,
  onButtonClick,
}) => {
  const isDarkBackground = background === 'dark';

  return (
    <Box backgroundColor={isDarkBackground ? 'grey_30' : 'secondary_l'}>
      <Box container py2>
        <Element css={rootStyles} className={className}>
          <Link to="/" css={{ display: 'flex' }}>
            <Logo
              type={isDarkBackground ? 'logotype-inverse' : 'logotype-primary'}
            />
          </Link>
          <NavGroup
            links={links}
            color={isDarkBackground ? 'primary' : 'secondary_d'}
          />
          <ButtonWithIcon color="secondary_d" onClick={onButtonClick}>
            Get involved!
          </ButtonWithIcon>
        </Element>
      </Box>
    </Box>
  );
};

Nav.defaultProps = {
  element: 'nav',
};

Nav.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
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
};

export default withSpacing(Nav);
