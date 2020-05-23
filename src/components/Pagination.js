import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PaginationStyles = styled.div`
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
  const totalPages = Math.ceil(totalCount / 10);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  return (
    <PaginationStyles>
      <Link
        disabled={prevPage <= 0 ? true : null}
        to={`${pathPrefix}${prevPage}`}
      >
        ← Prev 10 please
      </Link>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <Link
        disabled={nextPage > totalPages ? true : null}
        to={nextPage > totalPages ? `/` : `${pathPrefix}${nextPage}`}
      >
        {nextPage > totalPages ? `That's all Folks` : `10 More please →`}
      </Link>
    </PaginationStyles>
  );
}
