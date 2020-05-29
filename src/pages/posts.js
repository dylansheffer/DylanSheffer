import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { PostPageLayout } from '../components/styles/LayoutStyles';
import { PostCard } from '../components/PostCard';

export default function PostsPage({
  data: { allMdx: posts },
  pageContext,
  path,
}) {
  return (
    <PostPageLayout
      currentPage={pageContext.currentPage}
      totalCount={posts.totalCount}
      pathPrefix="/posts/"
      title="Articles"
    >
      {console.log(pageContext)}
      <Helmet>
        <title>
          {`Page ${
            pageContext.currentPage ? pageContext.currentPage : 1
          } - Articles - Dylan Sheffer`}
        </title>
      </Helmet>
      <div>
        {posts.edges.map(({ node: post }) => (
          <PostCard
            key={post.id}
            title={post.frontmatter.title}
            tags={post.frontmatter.tags}
            link={post.fields.slug}
            image={post.frontmatter.image}
            publishedDate={post.frontmatter.date}
          >
            {post.excerpt}
          </PostCard>
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
      limit: 3
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 350)
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
