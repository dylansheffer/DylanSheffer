import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from './mdxComponents/Text';
import { H } from './mdxComponents/Headings';
import { Tag } from './Tag';

const PostCardStyles = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  padding: 8px;
  background: var(--surface-light);
  border: 3px solid var(--black);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
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
  .tags {
    display: flex;
    flex-wrap: wrap;
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
    <Text>{children}</Text>
    <div className="tags">
      {tags && tags.map(t => <Tag className="tag">{t}</Tag>)}
    </div>
  </PostCardStyles>
);
