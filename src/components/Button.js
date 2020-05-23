import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Hack', monospace;
  background-color: ${props =>
    props.color ? `var(--${props.color})` : `var(--yellow)`};
  color: var(--main);
  padding: 8px;
  border-radius: 4px;
  border: 0;
  width: fit-content;
  text-decoration: none;
`;
