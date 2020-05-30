import styled from 'styled-components';

export const Blockquote = styled.blockquote`
  border-left: 2px solid var(--yellow);
  font-size: 1.75rem;
  padding: 1rem 2rem;
  margin: 3rem 0;
  background: var(--surface-medium);
  p:first-child {
    margin-top: 0;
  }
`;
