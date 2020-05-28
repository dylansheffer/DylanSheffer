import styled from 'styled-components';

export const Text = styled.p`
  line-height: 1.5;
  font-size: 2rem;
  font-size: ${props => (props.large ? `1.5em` : `1em`)};
`;
