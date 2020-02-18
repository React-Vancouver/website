import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import Styleguide from '@utilities/styles/styleguide';
import text from './index';

storiesOf('Blocks/Typography', module)
    .add('Headings', () => {
        const Title = styled.h1(text.title);
        const Heading = styled.h1(text.heading);
        const Subheading = styled.h1(text.subheading);

        return (
            <Styleguide>
                <Styleguide.Title>headings typography</Styleguide.Title>
                <Title>Title</Title>
                <Heading>Heading</Heading>
                <Subheading>Subheading</Subheading>
            </Styleguide>
        );
    })
    .add('Body', () => {
        const Paragraph = styled.p(text.paragraph);
        const Caption = styled.p(text.caption);
        const Emphasis = styled.p(text.emphasis);
        const Lead = styled.p(text.lead);

        return (
            <Styleguide>
                <Styleguide.Title>body typography</Styleguide.Title>
                <Lead>
                    Lead. Lorem ipsum dolor sit amet, ea nominati salutatus ius,
                    vix cu ubique corrumpit concludaturque. Ne tollit mentitum
                    invenire pro, in sit etiam essent euismod, propriae oporteat
                    vituperatoribus mei in. Sit in solet dolore dissentiunt,
                    sumo reque appareat ne eos.
                </Lead>
                <Emphasis>
                    Emphasis. Lorem ipsum dolor sit amet, ea nominati salutatus
                    ius, vix cu ubique corrumpit concludaturque. Ne tollit
                    mentitum invenire pro, in sit etiam essent euismod, propriae
                    oporteat vituperatoribus mei in. Sit in solet dolore
                    dissentiunt, sumo reque appareat ne eos.
                </Emphasis>
                <Paragraph>
                    Paragraph. Lorem ipsum dolor sit amet, ea nominati salutatus
                    ius, vix cu ubique corrumpit concludaturque. Ne tollit
                    mentitum invenire pro, in sit etiam essent euismod, propriae
                    oporteat vituperatoribus mei in. Sit in solet dolore
                    dissentiunt, sumo reque appareat ne eos. Te utamur tibique
                    petentium eos, vis in fabulas disputationi, mea quis natum
                    lucilius an. Eu sit dicit ponderum, vel dico melius vivendum
                    ex, vel amet numquam ut. Cu nibh rebum persecuti vis,
                    laoreet instructior vim ut. Ei libris theophrastus sit.
                </Paragraph>
                <Caption>
                    Caption. Lorem ipsum dolor sit amet, ea nominati salutatus
                    ius, vix cu ubique corrumpit concludaturque. Ne tollit
                    mentitum invenire pro, in sit etiam essent euismod, propriae
                    oporteat vituperatoribus mei in. Sit in solet dolore
                    dissentiunt, sumo reque appareat ne eos. Te utamur tibique
                    petentium eos, vis in fabulas disputationi, mea quis natum
                    lucilius an. Eu sit dicit ponderum, vel dico melius vivendum
                    ex, vel amet numquam ut. Cu nibh rebum persecuti vis,
                    laoreet instructior vim ut. Ei libris theophrastus sit.
                </Caption>
            </Styleguide>
        );
    });
