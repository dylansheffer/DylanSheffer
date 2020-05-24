const React = require('react');
const Layout = require('./src/components/Layout').default;
const { ContentLayout } = require('./src/components/Layout');

const PageWrapper = ({ element, props }) => {
  if (props.path === '/') {
    return <Layout {...props}>{element}</Layout>;
  }

  return <ContentLayout {...props}>{element}</ContentLayout>;
};

exports.wrapPageElement = PageWrapper;
