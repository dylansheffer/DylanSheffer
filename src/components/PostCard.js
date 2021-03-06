import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from './mdxComponents/Text';
import { H } from './mdxComponents/Headings';
import { Tags } from './Tag';
import { MyImg } from './MyImg';

const MiniPostCardStyles = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  padding: 1rem 2rem;
  background: var(--surface-light);
  border: var(--border);
  box-shadow: var(--shadow);
  border-radius: 0.5rem;
  .heading {
    color: var(--text);
    text-decoration: none;
    box-shadow: none;
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
  &:first-child {
    padding: 0 0 5rem 0;
  }
  &:not(:last-child) {
    border-block-end: 1px solid var(--yellow);
  }
  .image {
    max-width: calc(100vw - 3rem);
    box-shadow: none;
  }
  .heading {
    transition: none;
    color: var(--yellow);
    width: fit-content;
    h2 {
      width: fit-content;
      margin-top: 0;
      box-shadow: var(--link-underline);
      transition: var(--link-transition);
      &:hover,
      :focus {
        box-shadow: var(--link-underline-focus);
        color: var(--black);
      }
    }
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
    <Link to={link} className="image" aria-hidden="true" tabIndex="-1">
      <MyImg image={image.src} alt={image.alt} />
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
