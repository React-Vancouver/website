import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { rootStyles, headingStyles, sponsorStyles } from './Sponsors.styles';
import sponsorPropTypes from '@utilities/prop-types/sponsor';

import Box from '@elements/Box';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import GatsbyImage from 'gatsby-image';
import Grid from '@elements/Grid';
import Text from '@elements/Text';

const Sponsors = ({ className, sponsors, background }) => {
    return (
        <Box my4 css={rootStyles} className={className}>
            <Box css={headingStyles} mb3>
                <Text
                    scale={7}
                    element="h2"
                    lead
                    color={background === 'light' ? 'grey_40' : 'grey_90'}
                >
                    Sponsors
                </Text>
                <ButtonWithIcon
                    color={background === 'light' ? 'secondary_d' : 'primary'}
                    capped
                    iconName="heart"
                >
                    Become a sponsor
                </ButtonWithIcon>
            </Box>
            <Grid fluid={18} gap={2}>
                {sponsors.map(({ fluid, fixed, id, companyName }) => {
                    if (fluid || fixed) {
                        return (
                            <GatsbyImage
                                key={id}
                                fluid={fluid}
                                fixed={fixed}
                                alt={`${companyName} logo`}
                            />
                        );
                    } else {
                        return (
                            <Text
                                key={id}
                                py4
                                px2
                                subheading
                                css={sponsorStyles}
                            >
                                {companyName}
                            </Text>
                        );
                    }
                })}
            </Grid>
        </Box>
    );
};

Sponsors.defaultProps = {
    background: 'light',
};

Sponsors.propTypes = {
    background: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string,
    sponsors: PropTypes.arrayOf(sponsorPropTypes),
};

export default withSpacing(Sponsors);
