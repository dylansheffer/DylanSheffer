import React from 'react';
import styled from 'styled-components';

const headingSizes = {
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2.5,
  h5: 2,
  h6: 1.8,
  span: 3.2,
};

const markdownContent = {
  h1: '#  ',
  h2: '##  ',
  h3: '###  ',
  h4: '####  ',
  h5: '######  ',
  h6: '#######  ',
};

export const H = styled.h1`
  /* Default h1 */
  font-size: ${headingSizes.h1}rem;
  /* Default allow to change */
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  /* Visually override if need different font size vs the semantic element */
  font-size: ${({ looksLike }) => looksLike && `${headingSizes[looksLike]}rem`};
  a {
    text-decoration: none;
    &:hover,
    :focus {
      text-decoration: underline;
    }
  }
`;

export const MarkdownHeading = styled(H)`
  color: var(--yellow);
  &:before {
    content: '${({ as }) => (as ? markdownContent[as] : markdownContent.h1)}';
  }
`;
