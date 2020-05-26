import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Img from '../components/Img';
import { PostHeaderStyles } from '../components/styles/PostHeaderStyles';
import { MarkdownHeading } from '../components/mdxComponents/Headings';
import { Tags } from '../components/Tag';
import { PostMetaTags } from '../components/MetaTags';
import { ContentNav } from '../components/ContentNav';
import { EditOnGitHub } from '../components/EditOnGitHub';

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

export default function ProjectTemplate({
  data: { mdx: project },
  pageContext,
}) {
  if (!project) {
    return <p>No Project Found? This should be a 404</p>;
  }
  // TODO: Change to master when merged
  const editURL = `https://github.com/dylansheffer/dylansheffer/tree/v2/src/${
    project.fileAbsolutePath.split('/src/')[1]
  }`;

  return (
    <>
      <Img image={project.frontmatter.image} alt={project.frontmatter.title} />
      <PostHeaderStyles>
        <PostMetaTags post={project} />
        <MarkdownHeading>{project.frontmatter.title}</MarkdownHeading>
        <div className="post-metadata">
          <time dateTime={project.frontmatter.date}>
            {project.frontmatter.date}
          </time>
          <Tags tags={project.frontmatter.tags} />
          <EditOnGitHub url={editURL} />
        </div>
      </PostHeaderStyles>
      <MDXRenderer>{project.body}</MDXRenderer>
      <ContentNav
        pathPrefix={pageContext.pathPrefix}
        prev={pageContext.prev}
        next={pageContext.next}
      />
    </>
  );
}
