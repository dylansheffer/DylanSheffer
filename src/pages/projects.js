import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { PostPageLayout } from '../components/styles/LayoutStyles';
import { PostCard } from '../components/PostCard';

export default function ProjectsPage({
  data: { allMdx: projects },
  pageContext,
  path,
}) {
  return (
    <PostPageLayout
      title="My Work"
      currentPage={pageContext.currentPage}
      totalCount={projects.totalCount}
      pathPrefix="/projects/"
    >
      <Helmet>
        <title>
          {`Page ${
            pageContext.currentPage ? pageContext.currentPage : 1
          } - Work - Dylan Sheffer`}
        </title>
      </Helmet>
      <div>
        {projects.edges.map(({ node: project }) => (
          <PostCard
            key={project.id}
            title={project.frontmatter.title}
            tags={project.frontmatter.tags}
            link={project.fields.slug}
            image={project.frontmatter.image}
            publishedDate={project.frontmatter.date}
          >
            {project.excerpt}
          </PostCard>
        ))}
      </div>
    </PostPageLayout>
  );
}

export const pageQuery = graphql`
  query Projects($skip: Int! = 0) {
    allMdx(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            image {
              ...ImageFields
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
