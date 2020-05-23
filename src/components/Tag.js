import React from 'react';
import styled from 'styled-components';
import { Dot } from './Dot';
import { Text } from './mdxComponents/Text';
import { getRandomProperty } from '../utilities';

const TagStyles = styled.span`
  display: flex;
  align-items: center;
  .dot {
    margin-right: 1rem;
  }
`;

export const Tag = ({ color, children, ...rest }) => {
  const tagColors = {
    red: ['figma'],
    green: ['design'],
    yellow: ['javascript'],
    orange: ['aws'],
    purple: ['gatsby'],
    blue: ['react', 'accessibility'],
  };
  const getTagColor = tag => {
    const normalizedTag = tag.toLowerCase();
    const keys = Object.keys(tagColors);
    return keys.reduce((accumulator, key) => {
      if (tagColors[key].includes(normalizedTag)) {
        return `${accumulator}${key}`;
      }
      return `${accumulator}`;
    }, '');
  };
  const getRandomColor = () => getRandomProperty(tagColors);
  return (
    <TagStyles {...rest}>
      <Dot
        className="dot"
        color={color || getTagColor(children) || getRandomColor()}
      />
      <Text>{children}</Text>
    </TagStyles>
  );
};
