import React from 'react';
import styled from 'styled-components';
import { Dot } from './Dot';
import { Text } from './mdxComponents/Text';
import { getRandomProperty } from '../utilities';
import { SemanticList } from './SemanticList';
import { H } from './mdxComponents/Headings';

const TagStyles = styled.span`
  display: flex;
  align-items: center;
  p {
    white-space: nowrap;
    font-size: 1.75rem;
    margin: 0;
  }
  .dot {
    margin-right: 0.75rem;
  }
`;

export const Tag = ({ color, children, ...rest }) => {
  const tagColors = {
    red: ['figma', 'styled-components'],
    green: ['design', 'netlify cms'],
    yellow: ['javascript'],
    orange: ['aws'],
    purple: ['gatsby', 'graphql', 'misc'],
    blue: ['react', 'accessibility', 'netlify', 'docker', 'postgresql'],
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

const TagsStyle = styled(SemanticList)`
  flex-wrap: nowrap;
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
  .tag:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const Tags = ({ tags, headingLevel = 'h3' }) => {
  if (tags) {
    return (
      <TagsStyle className="tags" aria-labelledby="tags-heading">
        <H as={headingLevel} className="visually-hidden" id="tag-heading">
          Tags
        </H>
        {tags.map(t => (
          <li key={t} className="tag">
            <Tag>{t}</Tag>
          </li>
        ))}
      </TagsStyle>
    );
  }

  return <></>;
};
