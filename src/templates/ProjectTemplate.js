import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { MyImg } from '../components/MyImg';
import { PostHeaderStyles } from '../components/styles/PostHeaderStyles';
import { Blockquote } from '../components/mdxComponents/Blockquote';
import { MarkdownHeading } from '../components/mdxComponents/Headings';
import { Tags } from '../components/Tag';
import { ProjectMetaTags } from '../components/MetaTags';
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
        url
        live
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
  const editURL = `https://github.com/dylansheffer/dylansheffer/tree/master/src/${
    project.fileAbsolutePath.split('/src/')[1]
  }`;

  return (
    <>
      <MyImg
        image={project.frontmatter.image}
        alt={project.frontmatter.title}
      />
      <PostHeaderStyles>
        <ProjectMetaTags project={project} />
        <MarkdownHeading>{project.frontmatter.title}</MarkdownHeading>
        <div className="post-metadata">
          <time dateTime={project.frontmatter.date}>
            {project.frontmatter.date}
          </time>
          {project.frontmatter.live && (
            <a href={project.frontmatter.url}>Live Site</a>
          )}
          <Tags tags={project.frontmatter.tags} />
          <EditOnGitHub url={editURL} />
        </div>
      </PostHeaderStyles>
      <MDXRenderer>{project.body}</MDXRenderer>
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
