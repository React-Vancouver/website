import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import { withSpacing } from '@utilities/styles/spacing';
import { overlayStyles, cardStyles } from './Modal.styles';

import Box from '@elements/Box';

const Modal = ({
  isOpen,
  children,
  onCloseRequest,
}) => {
  const { opacity, transform } = useSpring(
    isOpen
      ? { opacity: 1, transform: 'translateY(0)' }
      : { opacity: 0, transform: 'translateY(5rem)' }
  );

  return (
    <animated.div style={{ opacity }}>
      <Box css={overlayStyles} onClick={onCloseRequest}>
        <animated.div style={{ transform }}>
          <Box css={cardStyles} testID="modal.card">{children}</Box>
        </animated.div>
      </Box>
    </animated.div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onCloseRequest: PropTypes.func,
};

export default withSpacing(Modal);
