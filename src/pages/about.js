import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const AboutPageStyle = styled.section``;

export default function AboutPage({ pageContext, path }) {
  return (
    <AboutPageStyle>
      <h1>About Page</h1>
    </AboutPageStyle>
  );
}

// export const pageQuery = graphql``;
