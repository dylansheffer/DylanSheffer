import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getRandomProperty } from '../utilities';

const PaginationStyles = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  justify-items: center;
  align-items: center;

  font-family: var(--monospace);
  background-color: var(--surface-dark);
  box-shadow: var(--shadow);
  border-radius: 0.5rem;
  padding: 0 2rem;
  .page-indicator {
    flex: 1 1 0;
  }
  a[disabled] {
    pointer-events: none;
    text-decoration: line-through;
    box-shadow: none;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const Message = ({ message: { message, emoji } }) => (
  <span>
    {message}
    {emoji && <span aria-hidden="true"> {emoji}</span>}
  </span>
);

export default function Pagination({
  totalCount,
  currentPage = 1,
  pathPrefix,
}) {
  const postsPerPage = 3;
  const totalPages = Math.ceil(totalCount / postsPerPage);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const noPreviousMessages = [
    {
      message: `There's no going back`,
      emoji: '😶',
    },
  ];
  const noNextMessages = [
    {
      message: 'GAME OVER',
      emoji: '👾',
    },
    {
      message: 'End of the Road',
      emoji: '🤠',
    },
  ];
  const getRandomMessage = array => array[getRandomProperty({ ...array })];

  if (totalPages === 1) {
    return <></>;
  }

  return (
    <PaginationStyles>
      <Link
        disabled={prevPage <= 0 ? true : null}
        to={prevPage <= 0 ? `/` : `${pathPrefix}${prevPage}`}
      >
        {prevPage === 0 ? (
          <Message message={getRandomMessage(noPreviousMessages)} />
        ) : (
          <Message message={{ message: `← Previous ${postsPerPage}` }} />
        )}
      </Link>
      <p className="page-indicator">
        Page {currentPage} of {totalPages}
      </p>
      <Link
        disabled={nextPage > totalPages ? true : null}
        to={nextPage > totalPages ? `/` : `${pathPrefix}${nextPage}`}
      >
        {nextPage > totalPages ? (
          <Message message={getRandomMessage(noNextMessages)} />
        ) : (
          <Message message={{ message: `${postsPerPage} More please →` }} />
        )}
      </Link>
    </PaginationStyles>
  );
}
