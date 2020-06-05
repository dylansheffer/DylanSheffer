import React from 'react';
import styled from 'styled-components';
import { SemanticList } from './SemanticList';

const A11yMenuStyles = styled.section`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  &:focus,
  :focus-within {
    width: auto;
    height: auto;
    left: 0;
    z-index: 9999;
  }
  ul {
    padding: 2rem;
  }
  li {
    margin-right: 2rem;
  }
`;

const A11yMenuContent = () => (
  <SemanticList>
    <li>
      <a href="#main">Skip to main content</a>
    </li>
    {/* TODO: Add other items such as a theme picker */}
  </SemanticList>
);

export const A11yMenu = () => (
  <A11yMenuStyles>
    <A11yMenuContent />
  </A11yMenuStyles>
);
