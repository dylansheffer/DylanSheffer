import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ContentNavStyles = styled.div`
  background-color: var(--surface-medium);
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  grid-template-rows: auto auto;
  border: 1.5px solid var(--black);
  border-radius: 1rem;
  margin: 4rem 0;
  a {
    display: grid;
    grid-template-rows: auto 1fr;
    &:only-child {
      grid-column: 1 / -1;
      text-align: right;
    }
    &:nth-child(2) {
      text-align: right;
    }
    text-decoration: none;
    box-shadow: none;
    strong {
      text-decoration: underline;
      text-decoration-color: var(--yellow);
    }
    &:hover,
    :focus {
      box-shadow: inset 0 -100px 0 var(--yellow);
      strong {
        text-decoration: none;
      }
    }
  }
  p {
    margin: 0;
  }

  p,
  strong {
    padding: 1rem 3rem;
  }
`;

export const ContentNav = ({ prev, next, pathPrefix }) => {
  if (!prev && !next) {
    return <></>;
  }

  return (
    <ContentNavStyles>
      {prev && (
        <Link to={`${prev.node.fields.slug}`}>
          <strong>← Prev</strong>
          {prev.node.frontmatter ? (
            <p>{prev.node.frontmatter.title}</p>
          ) : (
            <MDXRenderer>{prev.node.body}</MDXRenderer>
          )}
        </Link>
      )}
      {next && (
        <Link to={`${next.node.fields.slug}`}>
          <strong>Next →</strong>
          {next.node.frontmatter ? (
            <p>{next.node.frontmatter.title}</p>
          ) : (
            <MDXRenderer>{next.node.body}</MDXRenderer>
          )}
        </Link>
      )}
    </ContentNavStyles>
  );
};
