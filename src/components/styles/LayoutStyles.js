import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import { MarkdownHeading } from '../mdxComponents/Headings';

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    margin-top: 2rem;
    flex: 1 1 0;
  }
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

const PostPageLayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  h1 {
    margin-top: 0;
  }
  .posts {
    flex: 1 1 0;
  }
`;

export const PostPageLayout = ({
  currentPage,
  totalCount,
  pathPrefix,
  title,
  children,
}) => (
  <PostPageLayoutStyles>
    <MarkdownHeading>{title}</MarkdownHeading>
    <Pagination
      currentPage={currentPage}
      totalCount={totalCount}
      pathPrefix={pathPrefix}
    />
    <div className="posts">{children}</div>
    <Pagination
      currentPage={currentPage}
      totalCount={totalCount}
      pathPrefix={pathPrefix}
    />
  </PostPageLayoutStyles>
);

export default LayoutStyles;
