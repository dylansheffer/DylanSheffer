import React from 'react';
import { graphql, Link } from 'gatsby';
import { PostPageLayout } from '../components/styles/LayoutStyles';

export default function PostsPage({
  data: { allMdx: posts },
  pageContext,
  path,
}) {
  return (
    <PostPageLayout
      currentPage={pageContext.currentPage}
      totalCount={posts.totalCount}
      pathPrefix={path}
    >
      <div>
        {posts.edges.map(({ node: post }) => (
          <Link key={post.id} to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        ))}
      </div>
    </PostPageLayout>
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
