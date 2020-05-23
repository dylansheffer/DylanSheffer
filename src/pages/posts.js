import React from 'react';
import { graphql, Link } from 'gatsby';
import Pagination from '../components/Pagination';

export default function PostsPage({
  data: { allMdx: posts },
  pageContext,
  path,
}) {
  return (
    <>
      <Pagination
        currentPage={pageContext.currentPage}
        totalCount={posts.totalCount}
        pathPrefix="/posts/"
      />
      <div>
        {posts.edges.map(({ node: post }) => (
          <Link key={post.id} to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        ))}
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query Posts($skip: Int! = 0) {
    allMdx(
      filter: { fields: { collection: { eq: "posts" } } }
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
