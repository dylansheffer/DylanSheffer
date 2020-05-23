import React from 'react';
import styled from 'styled-components';

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  p {
    word-wrap: anywhere;
  }
`;

const ContentContainerStyle = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
  width: 100%;
`;

export const ContentContainer = ({ children }) => (
  <ContentContainerStyle className="content-container">
    {children}
  </ContentContainerStyle>
);

export default LayoutStyles;
