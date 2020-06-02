import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { rootStyles, buttonStyles, closeStyles } from './NextEvent.styles';
import { withSpacing } from '@utilities/styles/spacing';
import eventPropTypes from '@utilities/prop-types/event';
import { JOIN_SLACK } from '@constants/urls';

import Box from '@elements/Box';
import Button from '@elements/Button';
import Text from '@elements/Text';
import Link from '@elements/Link';
import Talk from './partials/Talk';

const talksPlaceholder = Array.from(Array(3)).map(() => ({
  title: '[TBD]',
}));

const NextEvent = ({ className, data = {}, onClose }) => {
  const { host, talks = talksPlaceholder } = data;

  const hasEvent = data && data.eventUrl;
  const handleClick = (e) => {
    e.preventDefault();
    const url = hasEvent ? data.eventUrl : JOIN_SLACK;
    const _window = window.open(url, '_blank');
    _window.focus();
  };

  return (
    <Box p5 css={rootStyles} className={className}>
      <div onClick={onClose} role="button" css={closeStyles}>
        Close&emsp;<span>×</span>
      </div>
      <Text mt2 color="white" element="p">
        Next Event
      </Text>
      <Text color="white" title scale={12} element="p">
        {data.date || 'Coming soon...'}
      </Text>
      <Text color="white" element="p" mb3>
        @{' '}
        {data?.host && host.googleMapsUrl ? (
          <Link out={host.googleMapsUrl}>{host.name || 'address'}</Link>
        ) : (
          <Text color="white" css={{ opacity: '50%' }}>
            &ensp;address
          </Text>
        )}
      </Text>

      {talks.map((talk, i) => (
        <Talk
          key={`${talk?.id}-${i}`}
          talk={talk}
          i={i}
          isPlaceholder={!data?.talks || (data?.talks && !data?.talks[i])}
        />
      ))}
      {!data || !data.eventUrl}
      <Button
        mt3
        color={hasEvent ? 'primary' : 'tertiary'}
        onClick={handleClick}
        css={buttonStyles}
      >
        {hasEvent ? 'Get tickets › ›' : 'Join Slack for updates'}
      </Button>
    </Box>
  );
};

NextEvent.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(eventPropTypes),
  onClose: PropTypes.func,
};

export default React.memo(withSpacing(NextEvent));
