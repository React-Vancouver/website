import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  carouselItemStyles,
  carouselStyles,
  carouselContentStyles,
  footerStyles,
} from './EventGallery.styles';
import eventPropTypes from '@utilities/prop-types/event';
import useCarousel, { next } from '@utilities/hooks/use-carousel';
import { link } from '@blocks/interactive';

import Box from '@elements/Box';
import EventCard from '@constructs/EventCard';
import Pips from '@constructs/Pips';
import PlaceholderItem from './partials/PlaceholderItem';

const EventGallery = ({ className, data }) => {
  const length = data?.length + 1 ?? 1;

  const [active, setActive, style, carouselRef, carouselItemRef] = useCarousel(
    length
  );

  const onNext = useCallback(() => {
    const _next = next(length, active);
    setActive(_next);
  }, [active]);

  return (
    <div className={className}>
      <div ref={carouselRef} css={carouselStyles}>
        <div style={style} css={carouselContentStyles}>
          <PlaceholderItem ref={carouselItemRef} />
          {data &&
            data.map((event) => (
              <div css={carouselItemStyles} key={event.id}>
                <EventCard data={event} />
              </div>
            ))}
          <PlaceholderItem />
        </div>
      </div>

      <Box mt3 container element="footer" css={footerStyles}>
        <Pips length={length} active={active} setActive={setActive} />
        <div role="button" css={link} onClick={onNext}>
          Next ››
        </div>
      </Box>
    </div>
  );
};

EventGallery.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(eventPropTypes)),
};

export default withSpacing(EventGallery);
