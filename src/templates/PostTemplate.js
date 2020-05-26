import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { IoLogoGithub } from 'react-icons/io';

import Img from '../components/Img';
import { PostHeaderStyles } from '../components/styles/PostHeaderStyles';
import { MarkdownHeading } from '../components/mdxComponents/Headings';
import { Tags } from '../components/Tag';
import { PostMetaTags } from '../components/MetaTags';

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
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        image {
          ...ImageFields
        }
      }
    }
  }
`;

export default function PostTemplate({ data: { mdx: post }, pageContext }) {
  if (!post) {
    return <p>No Post Found? This should be a 404</p>;
  }
  // TODO: Change to master when merged
  const editURL = `https://github.com/dylansheffer/dylansheffer/tree/v2/src/${
    post.fileAbsolutePath.split('/src/')[1]
  }`;

  return (
    <>
      <Img image={post.frontmatter.image} alt={post.frontmatter.title} />
      <PostHeaderStyles>
        <PostMetaTags post={post} />
        <MarkdownHeading>{post.frontmatter.title}</MarkdownHeading>
        <div className="post-metadata">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <Tags tags={post.frontmatter.tags} />
          <a
            className="edit"
            rel="noopener noreferrer"
            target="_blank"
            href={editURL}
          >
            <span>Edit Post</span> <IoLogoGithub className="edit-icon" />
          </a>
        </div>
      </PostHeaderStyles>
      <MDXRenderer>{post.body}</MDXRenderer>
    </>
  );
}
