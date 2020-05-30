import React from 'react';
import { Code } from './mdxComponents/Code';

export const Aesthetic = ({ children }) => {
  const aestheticText =
    children &&
    children
      .toUpperCase()
      .split('')
      .reduce((acc, cur) => `${acc}${cur} `, ``)
      .trim();

  return (
    <span aria-label={`${children} in aesthetic casing`}>
      <Code>{aestheticText}</Code>
    </span>
  );
};
