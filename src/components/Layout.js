import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdxComponents';
import LayoutStyles, { ContentContainer } from './styles/LayoutStyles';
import { Footer } from './Footer';
import GlobalStyles from './styles/GlobalStyles';
import { Nav } from './Nav';
import 'normalize.css';

function Layout({ path, children, ...rest }) {
  return (
    <>
      <GlobalStyles />
      <LayoutStyles>
        <Nav />
        <MDXProvider components={mdxComponents}>
          <main>{children}</main>
        </MDXProvider>
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
