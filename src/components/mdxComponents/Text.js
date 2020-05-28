import styled from 'styled-components';

export const Text = styled.p`
  line-height: 1.7777778;
  font-size: 2rem;
  font-size: ${props => (props.large ? `1.5em` : `1em`)};
  strong,
  em {
    font-size: 2.1rem;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
    font-weight: lighter;
  }
`;
