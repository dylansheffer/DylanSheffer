import React from 'react';
import { graphql, Link } from 'gatsby';
import Pagination from '../components/Pagination';

export default function ProjectsPage({
  data: { allMdx: projects },
  pageContext,
  path,
}) {
  return (
    <>
      <Pagination
        currentPage={pageContext.currentPage}
        totalCount={projects.totalCount}
        pathPrefix="/projects/"
      />
      <div>
        {projects.edges.map(({ node: project }) => (
          <Link key={project.id} to={project.fields.slug}>
            {project.frontmatter.title}
          </Link>
        ))}
      </div>
    </>
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
