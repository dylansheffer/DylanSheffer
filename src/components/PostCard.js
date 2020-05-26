import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from './mdxComponents/Text';
import { H } from './mdxComponents/Headings';
import { Tag, Tags } from './Tag';
import Img from './Img';

const MiniPostCardStyles = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  padding: 1rem;
  background: var(--surface-light);
  border: var(--border);
  box-shadow: var(--shadow);
  border-radius: 0.5rem;
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
    <Tags tags={tags} />
  </MiniPostCardStyles>
);

const PostCardStyles = styled.article`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 3rem;
  padding: 5rem 0;
  &:not(:last-child) {
    border-block-end: 1px solid var(--yellow);
  }
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
          <time dateTime={publishedDate}>{publishedDate}</time>
        </DatePublished>
      </div>
      <Text>{children}</Text>
      <Tags tags={tags} />
    </div>
  </PostCardStyles>
);
