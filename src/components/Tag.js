import React from 'react';
import styled from 'styled-components';
import { Dot } from './Dot';
import { Text } from './mdxComponents/Text';
import { getRandomProperty } from '../utilities';

const TagStyles = styled.span`
  display: flex;
  align-items: center;
  p {
    word-wrap: normal;
    font-size: 1.75rem;
    margin: 0;
  }
  .dot {
    margin-right: 0.75rem;
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

const TagsStyle = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--yellow) transparent;
  max-width: calc(100vw - 4rem);
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border-radius: 4px;
  }
  .tag {
    margin-right: 1.5rem;
  }
`;

export const Tags = ({ tags }) => (
  <TagsStyle className="tags">
    {tags &&
      tags.map(t => (
        <Tag key={t} className="tag">
          {t}
        </Tag>
      ))}
  </TagsStyle>
);
