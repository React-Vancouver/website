import React from 'react';
import { withSpacing } from '@utilities/styles/spacing';
import PropTypes from 'prop-types';
import S from '@symbols';
import styled from '@emotion/styled';
import text from '@blocks/typography';

const { calcSpace } = S;

class Styleguide extends React.Component {
    static Title = styled.h1({
        fontFamily: S.TYPOGRAPHY_HEADING_FONT,
        fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_REGULAR,
        borderBottom: `0.1rem solid ${S.COLOR_GREYS.GREY_80}`,
        paddingBottom: calcSpace(1),
        margin: `${calcSpace(4)} 0`,
        fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
        color: S.COLOR_GREYS.GREY_60,
    });

    static Description = styled.p({
        paddingTop: calcSpace(2),
        paddingBottom: calcSpace(2),
        color: S.COLOR_GREYS.MEDIUM,
    });

    static Main = styled.div({
        maxWidth: '76rem',
        margin: '0 auto',
        padding: `${calcSpace(4)} ${calcSpace(2)}`,
    });

    static Grid = styled.div(
        {
            display: `grid`,
            gridGap: `${calcSpace(2)}`,
        },
        ({ size = 14 }) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(${size}rem, 1fr))`,
        })
    );

    static DefinitionList = styled.dl({
        gridTemplateColumns: `repeat(2, 1fr)`,
        display: `grid`,
        gridGap: `${calcSpace(2)}`,
    });

    static DefinitionTerm = styled.dt({});

    static DefinitionDescription = styled.dd(text.caption, {
        color: S.COLOR_GREYS.MEDIUM,
    });
    static Caption = withSpacing(
        styled.p(text.caption, {
            color: S.COLOR_GREYS.MEDIUM,
        })
    );

    static Swatch = styled.div(
        {
            height: '20rem',
        },
        ({ property, value }) => ({
            [property]: value,
        })
    );

    static Swatches = ({ property, scheme }) => {
        return Object.keys(scheme).map((color) => (
            <article key={color}>
                <Styleguide.Swatch property={property} value={scheme[color]} />
                <Styleguide.Description>
                    {color}
                    <br />
                    {scheme[color]}
                </Styleguide.Description>
            </article>
        ));
    };

    static Font = styled(({ className, fontFamily }) => (
        <p className={className}>{fontFamily}</p>
    ))(({ fontFamily, fontWeight }) => ({
        fontFamily,
        fontWeight,
        margin: `0 0 ${S.calcSpace(2)} 0`,
    }));

    static Figure = styled.figure({
        minHeight: calcSpace(10),
        border: S.LINE_DEFAULT_BORDER,
    });

    static Figcaption = withSpacing(
        styled.figcaption(text.caption, {
            color: S.COLOR_GREYS.MEDIUM,
        })
    );

    render() {
        return <Styleguide.Main>{this.props.children}</Styleguide.Main>;
    }
}

Styleguide.propTypes = {
    children: PropTypes.node,
};

export default Styleguide;
