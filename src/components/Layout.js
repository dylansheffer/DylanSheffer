import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
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
        <MDXProvider components={mdxComponents}>
          {/* Brittle solution to wanting full length colored sections on the home page.
          Probably should address later */}
          {path === '/' ? (
            <>{children}</>
          ) : (
            <ContentContainer>{children}</ContentContainer>
          )}
        </MDXProvider>
        <Footer />
      </LayoutStyles>
    </>
  );
}

export default Layout;
