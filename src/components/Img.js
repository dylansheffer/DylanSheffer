import React from 'react';
import Img from 'gatsby-image';

export default function MyImg({ image, alt, ...theRest }) {
  if (!image) {
    return null;
  }
  if (image.extension === 'gif') {
    return <img alt={alt || ''} src={image.publicURL} {...theRest} />;
  }
  return (
    <Img alt={alt || ''} fluid={image.childImageSharp.fluid} {...theRest} />
  );
}
