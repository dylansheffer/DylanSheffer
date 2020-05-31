import React from 'react';
import { Helmet } from 'react-helmet';
import { pathJoin } from '../utilities';

import ogHomeImage from '../../static/og-images/OG-Home.png';
import ogArticleImage from '../../static/og-images/OG-Articles.png';
import ogAboutImage from '../../static/og-images/OG-About.png';
import ogWorkImage from '../../static/og-images/OG-Work.png';
import ogHireMeImage from '../../static/og-images/OG-Hire-Me.png';

function getBaseURL() {
  const url = process.env.GATSBY_URL;
  if (!url || url === 'undefined') {
    return `http://localhost:8000`;
  }
  return url;
}

const baseURL = getBaseURL();

export function DefaultMetaTags() {
  return (
    <Helmet>
      <meta name="generator" content="Dylan Sheffer on Gatsby!" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dylansheffer" />
      <meta name="twitter:creator" content="@dylansheffer" />
      <meta
        property="og:site_name"
        content="Dylan Sheffer - Full Stack Developer"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
}

export function PostMetaTags({ post }) {
  const canonical = pathJoin('https://dylansheffer.com', post.fields.slug);
  const url = pathJoin(baseURL, post.fields.slug);
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta name="twitter:url" content={url} />
        <meta
          name="twitter:title"
          content={`${post.frontmatter.title} - Dylan Sheffer`}
        />
        <meta name="twitter:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${post.frontmatter.title} - Dylan Sheffer`}
        />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={post.excerpt} />
        {post.frontmatter.date ? (
          <meta
            property="article:published_time"
            content={new Date(post.frontmatter.date).toISOString()}
          />
        ) : null}
      </Helmet>
    </>
  );
}

export function ArticleMetaTags({ post }) {
  return (
    <>
      <DefaultMetaTags />
      <PostMetaTags post={post} />
      <Helmet>
        <meta name="twitter:image" content={ogArticleImage} />
        <meta property="og:image" content={ogArticleImage} />
        <title>{post.frontmatter.title} - Articles - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}
export function ArticlesMetaTags({ pageContext }) {
  const description =
    'A collection of articles written by Dylan Sheffer; a full stack developer, accessibility advocate, and speaker.';
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:image" content={ogArticleImage} />
        <meta property="og:image" content={ogArticleImage} />
        <title>
          {`Page ${
            pageContext.currentPage ? pageContext.currentPage : 1
          } - Articles - Dylan Sheffer`}
        </title>
      </Helmet>
    </>
  );
}

export function WorkMetaTags({ pageContext }) {
  const description =
    'A collection of work by Dylan Sheffer; a full stack developer, accessibility advocate, and speaker.';
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <meta name="twitter:image" content={ogWorkImage} />
        <meta property="og:image" content={ogWorkImage} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <title>
          {`Page ${
            pageContext.currentPage ? pageContext.currentPage : 1
          } - Work - Dylan Sheffer`}
        </title>
      </Helmet>
    </>
  );
}
export function ProjectMetaTags({ project }) {
  return (
    <>
      <DefaultMetaTags />
      <PostMetaTags post={project} />
      <Helmet>
        <meta name="twitter:image" content={ogWorkImage} />
        <meta property="og:image" content={ogWorkImage} />
        <title>{project.frontmatter.title} - Project - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}

export function HomeMetaTags() {
  const description =
    'Dylan Sheffer; a full stack developer, accessibility advocate, and speaker living in Charlottesville, VA. Dylan is currently available for new clients! 🎉';
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:image" content={ogHomeImage} />
        <meta property="og:image" content={ogHomeImage} />
        <title>Dylan Sheffer - Full Stack Developer</title>
      </Helmet>
    </>
  );
}

export function AboutMetaTags() {
  const description =
    'Dylan Sheffer; a full stack developer, accessibility advocate, and speaker living in Charlottesville, VA. Dylan is currently available for new clients! 🎉';
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:image" content={ogAboutImage} />
        <meta property="og:image" content={ogAboutImage} />
        <title>About - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}

export function HireMeMetaTags() {
  const description =
    'Dylan Sheffer; a full stack developer, accessibility advocate, and speaker living in Charlottesville, VA. Dylan is currently available for new clients! 🎉';
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:image" content={ogHireMeImage} />
        <meta property="og:image" content={ogHireMeImage} />
        <title>Hire Me - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}
