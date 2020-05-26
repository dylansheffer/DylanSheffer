import React from 'react';
import { Helmet } from 'react-helmet';
import { pathJoin } from '../utilities';

function getBaseURL() {
  const url = process.env.GATSBY_URL;
  if (!url || url === 'undefined') {
    return `http://localhost:8888`;
  }
  return url;
}

const baseURL = getBaseURL();

export function PostMetaTags({ post }) {
  const canonical = pathJoin('https://dylansheffer.com', post.fields.slug);
  const url = pathJoin(baseURL, post.fields.slug);
  // const thumbnailData = {
  //   title: post.frontmatter.title,
  //   url,
  //   thumbnail: post.frontmatter.image?.publicURL,
  // };
  // const thumbnailQuery = new URLSearchParams(
  //   Object.fromEntries(
  //     Object.entries(thumbnailData).filter(([key, val]) => val !== undefined)
  //   )
  // ).toString();

  // const ogImage = `${baseURL}/.netlify/functions/ogimage?${thumbnailQuery}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta name="generator" content="Dylan Sheffer on Gatsby!" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dylansheffer" />
      <meta name="twitter:creator" content="@dylansheffer" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={post.frontmatter.title} />
      <meta name="twitter:description" content={post.excerpt} />
      {/* <meta name="twitter:image" content={ogImage} /> */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.frontmatter.title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={post.excerpt} />
      {post.frontmatter.date ? (
        <meta
          property="article:published_time"
          content={new Date(post.frontmatter.date).toISOString()}
        />
      ) : null}

      <meta property="og:site_name" content="Dylan Sheffer" />
      {/* <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
      <meta property="og:locale" content="en_US" />
      <title>{post.frontmatter.title} - Dylan Sheffer</title>
    </Helmet>
  );
}
