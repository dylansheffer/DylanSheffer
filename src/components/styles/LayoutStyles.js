import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  p {
    word-wrap: anywhere;
  }
`;

const ContentContainerStyle = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
  width: 100%;
`;

export const ContentContainer = ({ children }) => (
  <ContentContainerStyle className="content-container">
    {children}
  </ContentContainerStyle>
);

const PostPageLayoutStyles = styled.div``;

export const PostPageLayout = ({
  currentPage,
  totalCount,
  pathPrefix,
  children,
}) => (
  <PostPageLayoutStyles>
    <Pagination
      currentPage={currentPage}
      totalCount={totalCount}
      pathPrefix={pathPrefix}
    />
    {children}
    <Pagination
      currentPage={currentPage}
      totalCount={totalCount}
      pathPrefix={pathPrefix}
    />
  </PostPageLayoutStyles>
);

export default LayoutStyles;
