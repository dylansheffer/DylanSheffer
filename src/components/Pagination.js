import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PaginationStyles = styled.div`
  display: flex;
  text-align: center;
  justify-items: center;
  align-items: center;

  background-color: var(--surface-dark);
  border-radius: 4px;
  padding: 0 16px;
  .page-indicator {
    flex: 1 1 0;
  }
  a[disabled] {
    pointer-events: none;
    text-decoration: line-through;
  }
`;
export default function Pagination({
  totalCount,
  currentPage = 1,
  pathPrefix,
}) {
  const postsPerPage = 10;
  const totalPages = Math.ceil(totalCount / postsPerPage);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  return (
    <PaginationStyles>
      <Link
        disabled={prevPage <= 0 ? true : null}
        to={`${pathPrefix}${prevPage}`}
      >
        ← Previous {postsPerPage}
      </Link>
      <p className="page-indicator">
        Page {currentPage} of {totalPages}
      </p>
      <Link
        disabled={nextPage > totalPages ? true : null}
        to={nextPage > totalPages ? `/` : `${pathPrefix}${nextPage}`}
      >
        {nextPage > totalPages
          ? `GAME OVER 👾`
          : `${postsPerPage} More please →`}
      </Link>
    </PaginationStyles>
  );
}
