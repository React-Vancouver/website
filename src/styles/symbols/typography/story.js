import React from 'react';
import { storiesOf } from '@storybook/react';
import Styleguide from 'Utilities/styleguide';
import S from '@symbols';
import notes from './notes.md';

storiesOf('Symbols/Typography', module).add(
    'Fonts',
    () => {
        return (
            <Styleguide>
                <Styleguide.Title>fonts</Styleguide.Title>
                <Styleguide.DefinitionList>
                    <Styleguide.DefinitionTerm>
                        <Styleguide.Font
                            fontFamily={S.TYPOGRAPHY_HEADING_FONT}
                            fontWeight={S.TYPOGRAPHY_FONT_WEIGHT_REGULAR}
                        />
                        <Styleguide.Font
                            fontFamily={S.TYPOGRAPHY_HEADING_FONT}
                            fontWeight={S.TYPOGRAPHY_FONT_WEIGHT_BOLD}
                        />
                    </Styleguide.DefinitionTerm>
                    <Styleguide.DefinitionDescription>
                        Heading Font:
                        {S.TYPOGRAPHY_HEADING_FONT}
                        <br />
                        Font Weights: {S.TYPOGRAPHY_FONT_WEIGHT_REGULAR},{' '}
                        {S.TYPOGRAPHY_FONT_WEIGHT_BOLD}
                    </Styleguide.DefinitionDescription>
                    <Styleguide.DefinitionTerm>
                        <Styleguide.Font
                            fontFamily={S.TYPOGRAPHY_TEXT_FONT}
                            fontWeight={S.TYPOGRAPHY_FONT_WEIGHT_REGULAR}
                        />
                        <Styleguide.Font
                            fontFamily={S.TYPOGRAPHY_TEXT_FONT}
                            fontWeight={S.TYPOGRAPHY_FONT_WEIGHT_BOLD}
                        />
                    </Styleguide.DefinitionTerm>
                    <Styleguide.DefinitionDescription>
                        Text Font:
                        {S.TYPOGRAPHY_TEXT_FONT}
                        <br />
                        Font Weights: {S.TYPOGRAPHY_FONT_WEIGHT_REGULAR},{' '}
                        {S.TYPOGRAPHY_FONT_WEIGHT_BOLD}
                    </Styleguide.DefinitionDescription>
                </Styleguide.DefinitionList>
            </Styleguide>
        );
    },
    { notes }
);
