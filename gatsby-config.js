require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Dylan Sheffer',
    author: 'Dylan Sheffer',
    description: 'Dylan Sheffer- Web Developer. A11y Advocate. Tea Enthusiast.',
    siteUrl: process.env.DEPLOY_PRIME_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: `Monokai Pro`,
              extensions: [`${__dirname}/build-files/theme.vsix`],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Dylan Sheffer`,
              short_name: `Dylan Sheffer`,
              start_url: `/`,
              background_color: `#2d2a2e`,
              theme_color: `#2d2a2e`,
              display: `minimal-ui`,
              icon: `${__dirname}/static/logo.svg`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans'],
        },
        custom: {
          families: ['Hack'],
          urls: [
            'https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css',
          ],
        },
      },
    },
  ],
};
