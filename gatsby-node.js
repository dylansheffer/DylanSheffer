const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: node.fields.collection
        ? `/${node.fields.collection}${slug}`
        : slug,
    });
  }
};

async function makeProjectsFromMdx({ graphql, actions }) {
  const ProjectTemplate = path.resolve('./src/templates/ProjectTemplate.js');
  const { errors, data } = await graphql(
    `
      query ALL_PROJECTS_QUERY {
        allMdx(
          filter: { fields: { collection: { eq: "projects" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              body
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  if (errors) {
    throw new Error('There was an error', errors);
  }
  const projects = data.allMdx.edges;
  projects.forEach((project, i) => {
    const prev = projects[i - 1];
    const next = projects[i + 1];
    actions.createPage({
      path: `${project.node.fields.slug}`,
      component: ProjectTemplate,
      collection: `projects`,
      context: {
        slug: project.node.fields.slug,
        pathPrefix: `/projects`,
        prev,
        next,
      },
    });
  });
}

async function makePostsFromMdx({ graphql, actions }) {
  const ProjectTemplate = path.resolve('./src/templates/PostTemplate.js');
  const { errors, data } = await graphql(
    `
      query ALL_POSTS_QUERY {
        allMdx(
          filter: { fields: { collection: { eq: "posts" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              body
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  if (errors) {
    throw new Error('There was an error', errors);
  }
  const posts = data.allMdx.edges;
  posts.forEach((project, i) => {
    const prev = posts[i - 1];
    const next = posts[i + 1];
    actions.createPage({
      path: `${project.node.fields.slug}`,
      component: ProjectTemplate,
      collection: `posts`,
      context: {
        slug: project.node.fields.slug,
        prev,
        next,
        pathPrefix: `/posts`,
      },
    });
  });
}

async function paginate({
  graphql,
  actions,
  collection,
  pathPrefix,
  component,
}) {
  const { errors, data } = await graphql(
    `
      {
        allMdx(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `
  );

  const { totalCount } = data.allMdx;
  const pages = Math.ceil(totalCount / 10);

  Array.from({ length: pages }).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    actions.createPage({
      path: `${pathPrefix}${i + 1}`,
      component,
      context: {
        skip: i * 10,
        currentPage: i + 1,
      },
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([
    makeProjectsFromMdx({ graphql, actions }),
    makePostsFromMdx({ graphql, actions }),
    paginate({
      graphql,
      actions,
      collection: `projects`,
      pathPrefix: `/projects/`,
      component: path.resolve('./src/pages/projects.js'),
    }),
  ]);
};
