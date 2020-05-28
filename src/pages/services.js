import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MarkdownHeading } from '../components/mdxComponents/Headings';

const ServicesPageStyle = styled.section``;

export default function ServicesPage({ pageContext, path }) {
  return (
    <ServicesPageStyle>
      <Helmet>
        <title>Services - Dylan Sheffer</title>
      </Helmet>
      <MarkdownHeading>Services</MarkdownHeading>
    </ServicesPageStyle>
  );
}

// export const pageQuery = graphql``;
