import React from 'react';
import SEO from '@constructs/SEO';
import Box from '@elements/Box';
import Text from '@elements/Text';

const NotFoundPage = () => (
  <>
    <SEO
      page="not found"
      description="Sorry, I did not come up with a witty 404 joke."
    />
    <Box container>
      <Text element="h1" title>Page not found ☹</Text>
      <Text subheading element="p">Sorry, I did not come up with a witty 404 joke.</Text>
    </Box>
  </>
);

export default NotFoundPage;
