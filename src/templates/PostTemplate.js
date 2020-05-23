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

export default function ProjectTemplate({ data: { mdx: post }, pageContext }) {
  return (
    <>
      <h1>Post</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </>
  );
}
