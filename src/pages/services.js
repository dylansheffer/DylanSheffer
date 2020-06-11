import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { MarkdownHeading, H } from '../components/mdxComponents/Headings';
import { Text } from '../components/mdxComponents/Text';
import { CircleImg } from '../components/CircleImg';
import { ServicesMetaTags } from '../components/MetaTags';

const ServicesPageStyle = styled.section`
  h1 {
    margin-top: 0;
  }
`;

export default function ServicesPage({ data, pageContext, path }) {
  return (
    <ServicesPageStyle>
      <ServicesMetaTags />
      <MarkdownHeading>Services</MarkdownHeading>
    </ServicesPageStyle>
  );
}

export const query = graphql`
  query SERVICES_PAGE_QUERY {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
