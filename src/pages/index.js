import React, { useContext } from 'react';
import { withLayout, LayoutContext } from '@constructs/Layout';

import Box from '@elements/Box';
import Button from '@elements/Button';
import SEO from '@constructs/SEO';
import Text from '@elements/Text';

const IndexPage = () => {
  const { isNextEventOpen, setNextEventOpen } = useContext(LayoutContext);
  const toggle = () => setNextEventOpen(!isNextEventOpen);
  return (
    <>
      <SEO title="Home" />
      <Box container py6>
        <Text title element="h1" my2>
          Title
        </Text>
        <Text heading element="p" my2>
          Heading
        </Text>
        <Text subheading element="p" my2>
          Subheading
        </Text>
        <Button onClick={toggle}>Get tickets</Button>
        <Text caption element="p" my2>
          Caption
        </Text>
        <Text emphasis element="p" my2>
          Emphasis
        </Text>
        <Text label element="p" my2>
          Label
        </Text>
        <Text element="p" my2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, voluptas assumenda? Neque harum reiciendis aliquam
          repudiandae eius nesciunt adipisci, totam vitae quod fuga deserunt
          voluptates quae eaque voluptatum commodi odio!
        </Text>
        <Text element="p" my2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          nihil alias harum eos iure expedita quos tenetur odit fugit culpa.
          Tempora earum dolor suscipit illum delectus ex amet exercitationem
          enim.
        </Text>
      </Box>
    </>
  );
};

export default withLayout(IndexPage);
