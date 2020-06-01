import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Hack', monospace;
  background-color: ${props =>
    props.color ? `var(--${props.color})` : `var(--yellow)`};
  color: var(--black);
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;
  width: fit-content;
  text-decoration: none;
  transition: background 270ms cubic-bezier(0.77, 0, 0.175, 1);
  &:hover,
  :focus,
  [aria-current='page'] {
    background: var(--white);
    color: var(--black);
    cursor: pointer;
    box-shadow: none;
  }
`;
