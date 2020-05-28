import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { MyImg } from '../components/MyImg';
import { PostHeaderStyles } from '../components/styles/PostHeaderStyles';
import { EditDialogStyles } from '../components/styles/EditDialogStyles';
import { MarkdownHeading } from '../components/mdxComponents/Headings';
import { Tags } from '../components/Tag';
import { PostMetaTags } from '../components/MetaTags';
import { EditOnGitHub } from '../components/EditOnGitHub';
import { ContentNav } from '../components/ContentNav';

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
      <MyImg image={post.frontmatter.image} alt={post.frontmatter.title} />
      <PostHeaderStyles>
        <PostMetaTags post={post} />
        <MarkdownHeading>{post.frontmatter.title}</MarkdownHeading>
        <div className="post-metadata">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <Tags tags={post.frontmatter.tags} />
          <EditOnGitHub url={editURL} />
        </div>
      </PostHeaderStyles>
      <MDXRenderer>{post.body}</MDXRenderer>
      <EditDialogStyles>
        <p>
          Find an issue with this post? Think you could clarify, update or add
          something?
        </p>
        <p>
          All my posts are available to edit on GitHub. Any fix, little or
          small, is appreciated!
        </p>
        <EditOnGitHub url={editURL} />
      </EditDialogStyles>
      <ContentNav
        pathPrefix={pageContext.pathPrefix}
        prev={pageContext.prev}
        next={pageContext.next}
      />
    </>
  );
}
