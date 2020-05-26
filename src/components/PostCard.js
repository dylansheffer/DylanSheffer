import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from './mdxComponents/Text';
import { H } from './mdxComponents/Headings';
import { Tag } from './Tag';
import Img from './Img';

const Tags = styled.div`
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
    margin-right: 16px;
  }
`;

const MiniPostCardStyles = styled.article`
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
      font-family: var(--sans-serif);
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
    &:hover,
    :focus {
      text-decoration: underline;
    }
  }
  .card-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
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
`;

export const MiniPostCard = ({ title, tags, children, link, ...rest }) => (
  <MiniPostCardStyles {...rest}>
    <Link to={link} className="heading">
      <H as="h2" looksLike="h4">
        {title}
      </H>
    </Link>
    <div className="card-content">
      <Text>{children}</Text>
    </div>
    <Tags className="tags">
      {tags &&
        tags.map(t => (
          <Tag key={t} className="tag">
            {t}
          </Tag>
        ))}
    </Tags>
  </MiniPostCardStyles>
);

const PostCardStyles = styled.article`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 3rem;
  margin: 5rem 0;
  border-block-end: 1px solid var(--yellow);
  .image {
    max-width: calc(100vw - 3rem);
  }
  h2 {
    margin-top: 0;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const DatePublished = styled.p`
  font-weight: bold;
`;

export const PostCard = ({
  title,
  tags,
  children,
  link,
  image,
  publishedDate,
  ...rest
}) => (
  <PostCardStyles {...rest}>
    <Link to={link} className="image">
      <Img image={image} />
    </Link>
    <div>
      <div>
        <Link to={link} className="heading">
          <H as="h2" looksLike="h4">
            {title}
          </H>
        </Link>
        <DatePublished>
          <span className="visually-hidden">Date Published:</span>
          <time dateTime={publishedDate}>
            {new Date(publishedDate).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </DatePublished>
      </div>
      <Text>{children}</Text>
      <Tags className="tags">
        {tags &&
          tags.map(t => (
            <Tag key={t} className="tag">
              {t}
            </Tag>
          ))}
      </Tags>
    </div>
  </PostCardStyles>
);
