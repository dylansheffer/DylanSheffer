import styled from 'styled-components';

export const Dot = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: ${props => `var(--${props.color.toLowerCase()})`};
  border-radius: 50%;
`;
