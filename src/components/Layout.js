import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import mdxComponents from './mdxComponents';
import LayoutStyles, { ContentContainer } from './styles/LayoutStyles';
import { Footer } from './Footer';
import GlobalStyles from './styles/GlobalStyles';
import { Nav } from './Nav';
import 'normalize.css';

function Layout({ path, children, ...rest }) {
  const { title } = useSiteMetadata();
  // TODO: Add SEO Component https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/master/src/components/SEO/SEO.js
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <LayoutStyles>
        <Nav />
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        <Footer />
      </LayoutStyles>
    </>
  );
}

export const ContentLayout = ({ children }) => (
  <Layout>
    <ContentContainer>{children}</ContentContainer>
  </Layout>
);

export default Layout;
