import React from 'react';
import Layout from './src/components/constructs/Layout';

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
