import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const ServicesPageStyle = styled.section``;

export default function ServicesPage({ pageContext, path }) {
  return (
    <ServicesPageStyle>
      <h1>Services Page</h1>
    </ServicesPageStyle>
  );
}

// export const pageQuery = graphql``;
