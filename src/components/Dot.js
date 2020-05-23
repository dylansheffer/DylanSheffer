import styled from 'styled-components';

export const Dot = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: ${props => `var(--${props.color.toLowerCase()})`};
  border-radius: 50%;
`;
