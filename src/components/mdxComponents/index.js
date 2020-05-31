import React from 'react';
import { H } from './Headings';
import { Text } from './Text';
import { Code } from './Code';
import { Table } from './Table';
import { Pre } from './Pre';
import { Blockquote } from './Blockquote';
import { UL } from './UL';
import { OL } from './OL';

/* eslint-disable */
export default {
  h1: props => <H as="h1" {...props} />,
  h2: props => <H as="h2" {...props} />,
  h3: props => <H as="h3" {...props} />,
  h4: props => <H as="h4" {...props} />,
  h5: props => <H as="h5" {...props} />,
  h6: props => <H as="h6" {...props} />,
  p: props => <Text {...props} />,
  ul: props => <UL {...props} />,
  ol: props => <OL {...props} />,
  pre: props => <Pre {...props} />,
  inlineCode: props => <Code {...props} />,
  table: props => <Table {...props} />,
  blockquote: props => <Blockquote {...props} />,
};
