import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: rebeccapurple;
`;

export const Header = ({ title }) => (
  <StyledHeader>
    <Link to="/">
      <h1>{title}</h1>
    </Link>
  </StyledHeader>
);
