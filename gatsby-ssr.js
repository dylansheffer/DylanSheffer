const React = require('react');
const Layout = require('./src/components/Layout').default;

const PageWrapper = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

exports.wrapPageElement = PageWrapper;
