import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { rootStyles, headerStyles, speakersStyles } from './EventCard.styles';
import Avatar from '@elements/Avatar';
import Box from '@elements/Box';
import Text from '@elements/Text';
import moment from 'moment';

const EventCard = ({ className, data, image: Image, onClick }) => {
    console.log(data);
    const talks = data.talks.map(({ title }) => `“${title}”`).join(', ');
    const date = moment(data.date).format('MMM Do, YYYY');
    return (
        <article css={rootStyles} className={className} onClick={onClick}>
            <header css={headerStyles}>
                {Image ? <Image /> : <>&nbsp;</>}
            </header>
            <Box css={speakersStyles} px3>
                {data.talks.map((talk) => (
                    <Avatar
                        mr1
                        scale={5}
                        key={talk.id}
                        firstName={talk.speaker.firstName}
                        lastName={talk.speaker.lastName}
                        alt={`${talk.speaker.firstName} ${talk.speaker.lastName} avatar photo`}
                    />
                ))}
            </Box>
            <Box p3>
                <Text element="h6">
                    <Text subheading color="grey_40">
                        {date}
                    </Text>
                    <Text subheading color="grey_70">
                        &emsp;@&thinsp;{data.host.companyName}
                    </Text>
                </Text>
                <Text element="p" m0 color="grey_50">
                    {talks}
                </Text>
            </Box>
        </article>
    );
};

EventCard.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    image: PropTypes.node,
    onClick: PropTypes.func,
};

export default withSpacing(EventCard);
