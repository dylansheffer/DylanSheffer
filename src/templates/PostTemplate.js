import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { MyImg } from '../components/MyImg';
import { PostHeaderStyles } from '../components/styles/PostHeaderStyles';
import { MarkdownHeading } from '../components/mdxComponents/Headings';
import { Blockquote } from '../components/mdxComponents/Blockquote';
import { Tags } from '../components/Tag';
import { ArticleMetaTags } from '../components/MetaTags';
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
      excerpt(pruneLength: 250)
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
  const editURL = `https://github.com/dylansheffer/dylansheffer/tree/master/src/${
    post.fileAbsolutePath.split('/src/')[1]
  }`;

  return (
    <>
      <MyImg image={post.frontmatter.image} alt={post.frontmatter.title} />
      <PostHeaderStyles>
        <ArticleMetaTags post={post} />
        <MarkdownHeading>{post.frontmatter.title}</MarkdownHeading>
        <div className="post-metadata">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <Tags tags={post.frontmatter.tags} />
          <EditOnGitHub url={editURL} />
        </div>
      </PostHeaderStyles>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Blockquote>
        <p>
          Find an issue with this post? Think you could clarify, update or add
          something?
        </p>
        <p>
          All my posts are available to edit on GitHub. Any fix, little or
          small, is appreciated!
        </p>
        <EditOnGitHub url={editURL} />
      </Blockquote>
      <ContentNav
        pathPrefix={pageContext.pathPrefix}
        prev={pageContext.prev}
        next={pageContext.next}
      />
    </>
  );
}
