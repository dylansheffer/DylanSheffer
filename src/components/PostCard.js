import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from './mdxComponents/Text';
import { H } from './mdxComponents/Headings';
import { Tag } from './Tag';

const PostCardStyles = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  padding: 8px;
  background: var(--surface-light);
  border: 3px solid var(--black);
  box-shadow: var(--shadow);
  border-radius: 3px;
  .heading {
    color: var(--text);
    text-decoration: none;
    h2 {
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
    &:hover,
    :focus {
      text-decoration: underline;
    }
  }
  .card-content {
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) transparent;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--yellow);
      border-radius: 4px;
    }
  }
  .tags {
    display: flex;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) transparent;
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
      margin-right: 16px;
    }
  }
`;

export const PostCard = ({ title, tags, children, link, ...rest }) => (
  <PostCardStyles {...rest}>
    <Link to={link} className="heading">
      <H as="h2" looksLike="h4">
        {title}
      </H>
    </Link>
    <Text className="card-content">{children}</Text>
    <div className="tags">
      {tags && tags.map(t => <Tag className="tag">{t}</Tag>)}
    </div>
  </PostCardStyles>
);
