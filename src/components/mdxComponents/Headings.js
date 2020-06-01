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
  overflow-wrap: break-word;
  hyphens: auto;
  a {
    text-decoration: none;
    box-shadow: none;
    &:hover,
    :focus {
      color: var(--yellow);
      box-shadow: var(--link-underline);
    }
  }
  .header-anchor {
    display: flex;
    align-items: center;
    position: absolute;
    transform: translateX(-120%);
    text-decoration: none;
    box-shadow: none;
    opacity: 0;
    height: 100%;
    path {
      fill: var(--text);
    }
  }
  &:hover .header-anchor,
  &:focus .header-anchor {
    opacity: 1;
    box-shadow: none;
  }
  .header-anchor:focus,
  .header-anchor:hover {
    opacity: 1;
    box-shadow: none;
  }
`;

export const MarkdownHeading = styled(H)`
  display: block;
  color: var(--yellow);
  &:before {
    content: '${({ as }) => (as ? markdownContent[as] : markdownContent.h1)}';
  }
`;
