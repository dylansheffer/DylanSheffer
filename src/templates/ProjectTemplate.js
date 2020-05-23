import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
    }
  }
`;

export default function ProjectTemplate({
  data: { mdx: project },
  pageContext,
}) {
  return (
    <>
      <h1>Project</h1>
      <MDXRenderer>{project.body}</MDXRenderer>
    </>
  );
}
