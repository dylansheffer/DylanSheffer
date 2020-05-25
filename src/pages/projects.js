import React from 'react';
import { graphql, Link } from 'gatsby';
import { PostPageLayout } from '../components/styles/LayoutStyles';

export default function ProjectsPage({
  data: { allMdx: projects },
  pageContext,
  path,
}) {
  return (
    <PostPageLayout
      currentPage={pageContext.currentPage}
      totalCount={projects.totalCount}
      pathPrefix={path}
    >
      <div>
        {projects.edges.map(({ node: project }) => (
          <Link key={project.id} to={project.fields.slug}>
            {project.frontmatter.title}
          </Link>
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
      limit: 10
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          body
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
