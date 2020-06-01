import styled from 'styled-components';

export const Code = styled.code`
  background: var(--surface-dark);
  border: 0.25rem solid var(--black);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75em;
  font-family: var(--monospace);
  a {
    text-decoration: underline;
    box-shadow: none;
    &:focus,
    :hover {
      color: var(--yellow);
    }
  }
`;
