import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const ContactPageStyle = styled.section``;

export default function ContactPage({ pageContext, path }) {
  return (
    <ContactPageStyle>
      <h1>Contact Page</h1>
    </ContactPageStyle>
  );
}

// export const pageQuery = graphql``;
